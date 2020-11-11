import React, { Component } from 'react';
import Logo from '../../assets/Logo-transparent.svg';
import './Header.scss'
import { Link } from 'react-router-dom';
import facebook from '../../assets/Icon-facebook.svg';
import twitter from '../../assets/Icon-twitter.svg';
import instagram from '../../assets/Icon-instagram.svg';



export default class Header extends Component {
    render() {

        const facebookLink = "https://" + this.props.facebook;
        const twitterLink = "https://" + this.props.twitter;
        const homepageLink = "https://" + this.props.homepage;
        const instagramLink = "https://www.instagram.com/" + this.props.value ;
        return (
            <>
                <div className="header">
                  

                    <div className="header__middle">
                        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                            <img src={facebook} className="header__facebook" alt="Facebook logo" /></a>

                        <a href={twitterLink} target="_blank" rel="noopener noreferrer">
                            <img src={twitter} className="header__facebook" alt="Twitter logo" /></a>

                        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                            <img src={instagram} className="header__facebook" alt="Instagram logo" /></a>


                    </div>
                    <div className="header__right">
                        <a href={homepageLink} target="_blank" rel="noopener noreferrer">
                            <img src={this.props.image} className="header__band-image" alt="header"/></a>
                        <div className="header__band">{this.props.name}</div>
                    </div>
                </div>
            </>
        )
    }
}
