import React from 'react';
import { Router } from "@reach/router";

import News from "./components/News/News";
import Posts from "./components/Posts/Posts";
import './style.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<News path="/"/>
				<Posts path="/posts"/>
			</Router>
		);
	}
}

export default App;
