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

                    <div className="footer__left">
                        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                            <img src={facebook} className="footer__facebook" alt="Facebook logo" /></a>

                        <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                            <img src={twitter} className="footer__facebook" alt="Twitter logo" /></a>
                    </div>

                    <img src={logo} alt="music-news" className="footer__tagline" />

                    <div className="footer__right">

                            
                        <div className="footer__right">
                        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                            <img src={instagram} className="footer__facebook" alt="Instagram logo" /></a>
                            <a href={homepageLink} target="_blank" rel="noopener noreferrer">
                                <img src={this.props.image} className="footer__band" alt="header" /></a>
                            
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
