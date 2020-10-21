import React, { Component } from 'react'
import axios from 'axios'
import NewsSection from '../NewsAPI/NewsSection';
import ConcertAPI from '../ConcertAPI/ConcertAPI'
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import Youtube from '../VideoPlayer/Youtube'
import VideoList from '../VideoPlayer/VideoList'
import VideoDetail from '../VideoPlayer/VideoDetail';
import { uuid } from 'uuidv4';
import './MainTwo.scss'

export default class MainTwo extends Component {
   
      
   

   
    
    render() {
        return (
            <div>
                <Header />                
                <div className="card__wrapper">
                    <div className="card__one">
                    {/* {this.state.newsResults.map(data =>               
            //     <NewsSection 
            //      key={uuid()}
            //     title={data.title}
            //     url={data.url}
            // />)}                     */}
                    </div>
                    <div className="videoplayer__main">
                     
                     
                     {/* <VideoDetail video={this.state.selectedVideo}/>
                     <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/> */}
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
