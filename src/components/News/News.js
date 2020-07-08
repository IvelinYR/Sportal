import React from 'react';

import Navbar from "../Navbar/Navbar";
import './News.css';

import bmw from '../../images/bmw.jpg'
import milan from '../../images/milan.jpg'
import barca from '../../images/barca.jpg'
import napoli from '../../images/napoli.jpg'
import lebron from '../../images/lebron.jpg'

class News extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Navbar/>
                <div className="row justify-content-around news-container">
                    <div className="item col-sm-12 col-lg-2">
                        <img src={milan} alt="milan" />
                        <h5 className="news-title">
                            Милан не бе вкарвал 4 гола на Юве от 31 години
                        </h5>
                        <div className="news-description">
                            Победата на Милан над Ювентус с 4:2 бе първа за старши треньора Стефано Пиоли срещу 
                            "старата госпожа". В предишните си 20 мача срещу Юве специалистът имаше 5 равенства и цели 15 загуби.
                        </div>
                    </div>
                    <div className="item col-sm-12 col-lg-2">
                        <img src={napoli} alt="napoli" />
                        <h5 className="news-title">
                            Наполи се справи с Дженоа като гост
                        </h5>
                        <div className="news-description">
                            Отборът на Наполи постигна победа с 2:1 при гостуването си на Дженоа в двубой от 31-ия кръг на Серия “А”.
                        </div>
                    </div>
                    <div className="item col-sm-12 col-lg-2">
                        <img src={bmw} alt="bmw" />
                        <h5 className="news-title">
                            Със затаен дъх за новата Серия 4 Купе на BMW
                        </h5>
                        <div className="news-description">
                            Новото поколение на Серия 4 Купе ще излезе на пазара в края на годината и ще е наистина 
                            величествено. Двувратият спортен модел продължава красивата поредица от купета на BMW, 
                            която започва с 3/15 PS DA 4 през 1931-ва година, минава през победителя в Mille Miglia -  
                            BMW 327, и стига до днес.
                        </div>
                    </div>
                    <div className="item col-sm-12 col-lg-2">
                        <img src={lebron} alt="lebron" />
                        <h5 className="news-title">
                            Бижутата в гаража на ЛеБрон
                        </h5>
                        <div className="news-description">
                            Суперзвездата ЛеБрон Джеймс е един от най-богатите спортисти в света и това не е тайна за никого. 
                            Крилото на Лос Анджелис Лейкърс не обича да парадира с богатството си, но е голям 
                            любител на автомобилите и има впечатляваща колекция скъпи и луксозни возила.
                        </div>
                    </div>
                    <div className="item col-sm-12 col-lg-2">
                        <img src={barca} alt="barca" />
                        <h5 className="news-title">
                            Гризман твърдо остава в Барселона
                        </h5>
                        <div className="news-description">
                            Нападателят на Барселона Антоан Гризман ще остане в клуба, разкри Sport.es. 
                            Изданието твърди, че французинът е получил уверение от ръководството, че на него 
                            ще се разчита и занапред.
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default News;
