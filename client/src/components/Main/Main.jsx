import React, { Component } from 'react';
import './Main.scss'
import animatedLogo from '../../assets/Logo-movie-wide.mp4';
import search from '../../assets/Search.svg';


export default class Header extends Component {


    render() {
        return (
            <>
            <div className="main">
                <video src={animatedLogo} autoPlay loop className="main__logo" alt="Logo" />
                <form className="main__form">
                     <input type="text" className="main__search" placeholder="Search your favourite artist name here..."/>
                </form>
                <img src={search} className="main__search-button" alt="search-button" />
            </div>
            </>
        )
    }
}
