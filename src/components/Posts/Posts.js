import React from 'react';
import axios from 'axios';

import Navbar from "../Navbar/Navbar";
import Loader from "../../loader.gif";
import clientConfig from '../../client-config';
import './Posts.css';

class Posts extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			postTitel: '',
			postDescription: '',
			loading : false,
			posts: [],
			error: ''
		};
	}

	createMarkup = ( data ) => ({
		__html: data
	});

	handleClick = () => {
		let self = this;
		const JSONPlaceholderSiteURL = clientConfig.siteUrl;

		if (this.state.postTitel === '' || this.state.postDescription === '') {
			return
		}
		
		axios.post(`${JSONPlaceholderSiteURL}/posts/`, {
			title: self.state.postTitel,
      		body: self.state.postDescription,
			userId: Math.random().toString().slice(2,11)
		  })
		  .then(function (response) {
			const newPosts = self.state.posts

			newPosts.push(response.data)
			self.setState({ postTitel: '', postDescription: '', posts: newPosts})
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	}

	handleChangeTitle = (e) => {
		this.setState({ postTitel: e.target.value })
	}

	handleChangeDescription = (e) => {
		this.setState({ postDescription: e.target.value })
	}

	componentDidMount() {
		const JSONPlaceholderSiteURL = clientConfig.siteUrl;

		this.setState( { loading: true }, () => {
			axios.get( `${JSONPlaceholderSiteURL}/posts/` )
				.then( res => {
					if ( 200 === res.status ) {
						if ( res.data.length ) {
							this.setState( { loading: false, posts: res.data } );
						} else {
							this.setState( { loading: false, error: 'No Posts Found' } );
						}
					}

				} )
				.catch( err => this.setState( { loading: false, error: err } ) );
		})
	};

	render() {
		const { loading, posts, error } = this.state;

		const itemsToShow = 
		    posts.slice((posts.length - 20), posts.length)
            .map(post =>
				<div key={post.id} className="card border-dark mb-3" style={{maxWidth: '50rem'}}>
					<div className="card-header">
						{post.title}
					</div>
					<div className="card-body">
						{post.body}
					</div>
				</div>
			).reverse();

		return(
			<React.Fragment>
				<Navbar/>
				{ error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
				{ posts.length ? (
					<div className="posts-container">
						<div className="new-post">
							<label>Titile</label>
							<input 
								type="text" 
								className="form-control post-title" 
								style={{maxWidth: '48rem'}}
								value={this.state.postTitel}
								onChange={this.handleChangeTitle}
							></input>
							<label>Description</label>
							<input 
								type="text" 
								className="form-control post-description" 
								style={{maxWidth: '48rem'}}
								value={this.state.postDescription}
								onChange={this.handleChangeDescription}
							></input>
							<button type="button" className="btn btn-success" onClick={this.handleClick}>Submit</button>
						</div>						
						
						{ itemsToShow }
					</div>
				) : '' }
				{ loading && <img className="loader" src={Loader} alt="Loader"/> }
			</React.Fragment>
		);
	}
}

export default Posts;
