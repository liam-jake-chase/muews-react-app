import React, { Component } from 'react';
import './Footer.scss'

import logo from '../../assets/Music-news-you-can-use.svg';
import facebook from '../../assets/Icon-facebook.svg';
import twitter from '../../assets/Icon-twitter.svg';
import instagram from '../../assets/Icon-instagram.svg';



export default class Footer extends Component {


    render() {
        const facebookLink = "https://" + this.props.facebook;
        const twitterLink = "https://" + this.props.twitter;
        const homepageLink = "https://" + this.props.homepage;
        const instagramLink = "https://www.instagram.com/" + this.props.value;



        return (
            <>
                <div className="footer">

                   
                    <img src={logo} alt="music-news" className="footer__tagline" />

                   
                </div>

            </>
        )
    }
}
