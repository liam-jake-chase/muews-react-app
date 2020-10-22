import React, { Component } from 'react';
import NewsSection from '../NewsAPI/NewsSection';
import ConcertAPI from '../ConcertAPI/ConcertAPI';
import Header from '../Header/Header';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoList from '../VideoPlayer/VideoList';
import VideoDetail from '../VideoPlayer/VideoDetail';
import { uuid } from 'uuidv4';
import './MainTwo.scss';

export default class MainTwo extends Component {

   
    
    render() {
        return (
            <div>
                <Header />                
                <div className="card__wrapper">
                    <div className="card__one">
                        <VideoDetail video={this.props.selectedVideo}/>
                        <VideoList handleVideoSelect={this.props.handleVideoSelect} videos={this.props.videos}/>
                    {/* {this.props.newsResults.map(data =>               
                        <NewsSection 
                        key={uuid()}
                        title={data.title}
                        url={data.url}
                        />)}                     */}
                      
                    </div>
                   
                    <div className="card__wrapper-two">
                        <div className="card__two">
                            {/* <NewsAPI /> */}
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
