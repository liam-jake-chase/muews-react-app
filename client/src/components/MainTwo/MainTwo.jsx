import React, { Component } from 'react'
import NewsAPI from '../NewsAPI/NewsAPI';
import ConcertAPI from '../ConcertAPI/ConcertAPI'
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import './MainTwo.scss'

export default class MainTwo extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="card__wrapper">
                    <div className="card__one">
                        <NewsAPI />
                    </div>
                    <div className="videoplayer__main">
                     <VideoPlayer />
                     </div>  
                    <div className="card__wrapper-two">
                        <div className="card__two">
                            <NewsAPI />
                        </div>
                        {/* <div className="card__three">
                            <NewsAPI />
                        </div> */}
                    </div>
                </div>


            </div>
        )
    }
}
