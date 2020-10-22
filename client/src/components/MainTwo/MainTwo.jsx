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
                <Header 
                name={this.props.artistInfo.name}
                image={this.props.artistInfo.thumb_url}
                facebook={this.props.artistInfo.facebook_page_url}
                />                
                <div className="card__wrapper">
                    <div className="card__one">
                        <VideoDetail video={this.props.selectedVideo}/>
                        <VideoList handleVideoSelect={this.props.handleVideoSelect} videos={this.props.videos}/>
                    
                      
                    </div>
                   
                    <div className="card__wrapper-two">
                        <div className="card__two">
                           {/* <img src={this.props.artistInfo.image_url} className="hero-image" alt="Band hero image" />     */}
                            
                        </div>
                        <div className="card__three">
                        {this.props.newsResults.map(data =>               
                        <NewsSection 
                        key={uuid()}
                        title={data.title}
                        url={data.url}
                        />)}               
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
