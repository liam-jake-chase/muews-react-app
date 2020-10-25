import React, { Component } from 'react';
import Logo from '../../assets/Logo-transparent.svg';
import './Header.scss'
import { Link } from 'react-router-dom';
import facebook from '../../assets/Icon-facebook.svg';
import twitter from '../../assets/Icon-twitter.svg';
import instagram from '../../assets/Icon-instagram.svg';
import searchButton from '../../assets/Search.svg';


export default class Header extends Component {
    render() {

        const twitterLink = "https://" + this.props.twitter;
        const homepageLink = "https://" + this.props.homepage;
        return (
            <>
                <div className="header">
                    <Link to="/">
                        <img src={searchButton} className="header__search" alt="searchbutton logo" />
                        <img src={Logo} className="header__logo" alt="Muews Logo" />
                    </Link>

                    <div className="header__middle">
                        <a href={this.props.facebook} target="_blank">
                            <img src={facebook} className="header__facebook" alt="Facebook logo" /></a>

                        <a href={twitterLink} target="_blank">
                            <img src={twitter} className="header__facebook" alt="Twitter logo" /></a>

                        <a href={this.props.instagram} target="_blank">
                            <img src={instagram} className="header__facebook" alt="Instagram logo" /></a>


                    </div>
                    <div className="header__right">
                        <a href={homepageLink} target="_blank">
                            <img src={this.props.image} className="header__band-image" /></a>
                        <div className="header__band">{this.props.name}</div>
                    </div>
                </div>
            </>
        )
    }
}
