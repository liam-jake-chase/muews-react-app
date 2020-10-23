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
    artistInfo: [],
    concertInfo: [],
    discogsInfo: [],
    audioDB: [],
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
          .get(`https://newsapi.org/v2/everything?q=${this.state.searchName}&from=2020&pageSize=5&language=en&sortBy=relevancy&apiKey=0c5f7ab300a446dd9642ea289e6b7522`)
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
    .then(response => {
      console.log(response.data)
      this.setState({
        artistInfo: response.data
      })
    })
}



getEvent = () =>{
  axios
    .get(`https://rest.bandsintown.com/artists/${this.state.searchName}/events/?app_id=2bfefdd4b6571ebbc6ba9afbb5bc55d8`)
    .then(response => {
      console.log(response.data)
      this.setState({
        concertInfo: response.data
      })
    })
}

getData = () => {

  const options = {
    method: 'GET',
    url: 'https://rapidapi.p.rapidapi.com/search.php',
    params: {s: this.state.searchName},
    headers: {
      'x-rapidapi-host': 'theaudiodb.p.rapidapi.com',
      'x-rapidapi-key': '9ad5aa526emsh0dcf71b6c5b6a8ap13fe96jsn35c2391e2e7b'
    }
  };

  axios 
    .request(options)
    .then(response => {
      console.log(response.data.artists[0])
      this.setState({
        audioDB: response.data.artists[0]
      })
    })
}



getArtistData = () => {
  axios
    .get(`https://api.discogs.com/database/search?q=${this.state.searchName}&artist&token=ZHbyKpYDpUAfgJsaGxIDxBvqnEiCSybfkHQcYFYs`)
    .then(response => {
      console.log(response.data.results)
      let artistName = response.data.results[0].id
      let idSearch = () => {
        axios
        .get(`https://api.discogs.com/artists/${artistName}`)
        .then(response => {
          console.log(response.data)
          this.setState({
            discogsInfo: response.data
          })
          
          
        })
        

      }
      idSearch();
    })
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
  this.getArtistData();
  this.getData();
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
          selectedVideo={this.state.selectedVideo}
          videos={this.state.videos}
          handleVideoSelect={this.handleVideoSelect}
          artistInfo={this.state.artistInfo}
          discogsInfo={this.state.discogsInfo}
          audioDB={this.state.audioDB}
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
