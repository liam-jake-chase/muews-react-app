import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import MainTwo from './components/MainTwo/MainTwo'
import axios from 'axios';
import Youtube from './components/VideoPlayer/Youtube'
import './App.css';
import React, { Component } from 'react'
import {BrowserRouter, Switch, Route, useHistory} from 'react-router-dom';

export default class App extends Component {
  state = {
    searchName: '',
    newsResults: [],
    videos: [],
    selectedVideo: null,
    redirect: false
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

getArtist = () =>{
  axios
    .get(`https://rest.bandsintown.com/artists/${this.state.searchName}/?app_id=2bfefdd4b6571ebbc6ba9afbb5bc55d8`)
    .then(response => console.log(response.data))
}

getEvent = () =>{
  axios
    .get(`https://rest.bandsintown.com/artists/${this.state.searchName}/events/?app_id=2bfefdd4b6571ebbc6ba9afbb5bc55d8`)
    .then(response => console.log(response.data))
}

 handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
  }  



handleSubmit = (event) => {
  event.preventDefault();
  this.getNews();
  this.getVideo();
  this.getArtist();
  this.getEvent();
  this.setState({
    redirect: true
  })
  
  
      
}
  
  render() {
   

    return (
      <div className="App">        
        <BrowserRouter>              
        <Switch>           
          <Route exact path="/" render={(props) => ( <Main {...props}   
              value={this.state.searchName} 
              onChange={this.handleSearchName}
              handleSubmit={this.handleSubmit}
              redirect={this.state.redirect}
            />
          )}/>
          <Route path="/MainTwo" render={(props) => ( <MainTwo {...props}
          newsResults={this.state.newsResults}
          handleVideoSelect={this.state.handleVideoSelect}
          videos={this.state.videos}
          handleVideoSelect={this.handleVideoSelect}
          />
          )}/>
          
        </Switch>
         </BrowserRouter>          
       <div className="footer__main">
        <Footer />
        </div>     
     
     </div>
    )
  }
}
