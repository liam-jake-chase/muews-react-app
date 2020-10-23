import React, { Component } from 'react';
import Logo from '../../assets/Logo-transparent.svg';
import './Header.scss'
import { Link } from 'react-router-dom';
import facebook from '../../assets/Icon-facebook.svg'


export default class Header extends Component {
    render() {
        return (
            <>
            <div className="header">
                <Link to="/">
                    <img src={Logo} className="header__logo" alt="Muews Logo" />
                </Link>
                <div className="header__right">
                <img src={this.props.image} className="header__band-image" />
                <div className="header__band">{this.props.name}</div>
                <a href={this.props.facebook} target="_blank">
                <img src={facebook} className="header__facebook" alt="Facebook logo" /></a>
                </div>
            </div>
            </>
        )
    }
}
