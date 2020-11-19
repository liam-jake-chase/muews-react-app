import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import MainTwo from './components/MainTwo/MainTwo'
import axios from 'axios';
import Youtube from './components/VideoPlayer/Youtube'
import './App.css';
import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Signup from './components/SignupLogin/Signup';
import NavbarMenu from './components/SideBar/NavbarMenu';
import Login from './components/SignupLogin/Login'
import PrivateRoute from './components/SignupLogin/PrivateRoute'
import ForgotPassword from './components/SignupLogin/ForgotPassword'
import UpdateProfile from './components/SignupLogin/UpdateProfile'
import Dashboard from './components/SignupLogin/Dashboard'
import { AuthProvider } from './Context/AuthContext';




export default class App extends Component {
  state = {
    searchName: '',
    newsResults: [],
    videos: [],
    artistInfo: [],
    concertInfo: [],
    discogsInfo: [],
    audioDB: [],
    releaseData: [],
    images: [],
    selectedVideo: null,
    redirect: false,
    noData: ''
}



handleSearchName = (event) => {
    this.setState({
       searchName: event.target.value 
    })
}


getVideo = async () => {
      const response = await Youtube.get('/search', {
          params: {
              q: this.state.searchName
          }
      })
      
      this.setState({
        videos: response.data.items
    })
}

getArtist = () =>{
  axios
    .get(`https://rest.bandsintown.com/artists/${this.state.searchName}/?app_id=2bfefdd4b6571ebbc6ba9afbb5bc55d8`)
    .then(response => {
      
      this.setState({
        artistInfo: response.data
      })
    })
}



getEvent = () =>{
  axios
    .get(`https://rest.bandsintown.com/artists/${this.state.searchName}/events/?app_id=2bfefdd4b6571ebbc6ba9afbb5bc55d8`)
    .then(response => {
      if(!response.data.length) {
        this.setState({
          noData: "No Event Listings"
        }) 
      } else {
        this.setState({
          concertInfo: response.data
        })
        
      }

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
      this.setState({
        audioDB: response.data.artists[0]
      })
    })
}



getArtistData = () => {
  const access = {headers: {
    "Authorization": "Discogs key=trndaRvgxPZeVGxKzXuo, secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU"
  }}
  axios
    .get(`https://api.discogs.com/database/search?q=${this.state.searchName}&artist&key=trndaRvgxPZeVGxKzXuo&secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU`)
    .then(response => {
      let artistName = response.data.results[0].id
      let idSearch = () => {
        axios
        .get(`https://api.discogs.com/artists/${artistName}`, access)
        .then(response => {
            this.setState({
            discogsInfo: response.data,
            images: response.data.images
          })
          axios
            .get(`https://api.discogs.com/artists/${artistName}/releases?year&key=trndaRvgxPZeVGxKzXuo&secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU`)
            .then(response =>  {
                this.setState({
                releaseData: response.data.releases
              })
              
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
  this.getVideo();
  this.getArtist();
  this.getEvent();
  this.getArtistData();
  this.getData();
  this.setState({
    redirect: true
  })
  
}

handleSubmitTwo = () => {
    this.setState({
    redirect: false
  })
}
  
  render() { 
    
    

    return (
      <div className="App">        
        <BrowserRouter> 
        <AnimatePresence exitBeforeEnter> 
        <AuthProvider>       
          <NavbarMenu 
          handleSubmitTwo={this.handleSubmitTwo}
          name={this.state.artistInfo}
          />    
          </AuthProvider>        
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
          selectedVideo={this.state.selectedVideo}
          videos={this.state.videos}
          handleVideoSelect={this.handleVideoSelect}
          artistInfo={this.state.artistInfo}
          discogsInfo={this.state.discogsInfo}
          audioDB={this.state.audioDB}
          concertInfo={this.state.concertInfo}
          releaseData={this.state.releaseData}
          images={this.state.images}
          handleSubmitTwo={this.handleSubmitTwo}
          value={this.state.searchName} 
          noData={this.state.noData}
          />
          )}/>
          <AuthProvider>
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} /> 
          </AuthProvider>
        </Switch>
        </AnimatePresence>   
         </BrowserRouter>          
         
     
     </div>
    )
  }
}
