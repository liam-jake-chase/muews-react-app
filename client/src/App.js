import React from 'react';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Footer from './components/Footer/Footer'
import MainTwo from './components/MainTwo/MainTwo'
import Header from './components/Header/Header'
import './App.css';


function App() {
  return (
    <div className="App">        
      <MainTwo />          
      <div className="footer__main">
      <Footer />
      </div>     
    </div>
  );
}

export default App;
