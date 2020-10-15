import React, { Component } from 'react';
import './Header.scss'
import logo from '../../assets/Music-news-you-can-use.svg';



export default class Header extends Component {


    render() {
        return (
            <>
            <div className="header">                
                <img src={logo} alt="music-news" className="header__tagline" />
            </div>
            </>
        )
    }
}
