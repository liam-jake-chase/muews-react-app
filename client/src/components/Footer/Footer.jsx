import React, { Component } from 'react';
import './Footer.scss'
import logo from '../../assets/Music-news-you-can-use.svg';



export default class Footer extends Component {


    render() {
        return (
            <>
            <div className="footer">                
                <img src={logo} alt="music-news" className="footer__tagline" />
            </div>
            </>
        )
    }
}
