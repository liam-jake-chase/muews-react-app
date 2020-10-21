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
    state = {
        searchName: '',
        newsResults: [],
        videos: [],
        selectedVideo: null
    }

    handleSearchName = (event) => {
        this.setState({
           searchName: event.target.value 
        })
    }

    getNews = () => {
          axios
              .get(`https://newsapi.org/v2/everything?q=${this.state.searchName}&from=2020&pageSize=10&language=en&sortBy=relevancy&apiKey=0c5f7ab300a446dd9642ea289e6b7522`)
              .then(response => {
                  console.log(response.data.articles)
                  this.setState({
                      newsResults: response.data.articles
                  })
              })
              
              
      }
    getVideo = async () => {
          const response = await Youtube.get('/search', {
              params: {
                  q: this.state.searchName
              }
          })
          console.log(response)
          this.setState({
            videos: response.data.items
        })
    }
      
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }  

    handleSubmit = (event) => {
    event.preventDefault();
    this.getNews();
    this.getVideo();
        
    }
    
    render() {
        return (
            <div>
                <Header />
                <form className="main__form" onSubmit={this.handleSubmit}>
                     <input type="text" 
                     value={this.state.searchName} 
                     onChange={this.handleSearchName} 
                     className="main__search" 
                     placeholder="Search"/>
                     <button type="submit">Submit</button>
                </form>
                <div className="card__wrapper">
                    <div className="card__one">
                    {this.state.newsResults.map(data =>               
                <NewsSection 
                 key={uuid()}
                title={data.title}
                url={data.url}
            />)}                    
                    </div>
                    <div className="videoplayer__main">
                     
                     <VideoDetail video={this.state.selectedVideo}/>
                     <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
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
