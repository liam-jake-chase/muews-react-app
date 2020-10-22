import React, { Component } from 'react';
import Logo from '../../assets/Logo-transparent.svg';
import './Header.scss'
import { NavLink } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <>
            <div className="header">
                <NavLink to="/">
                    <img src={Logo} className="header__logo" alt="Muews Logo" />
                </NavLink>
            </div>
            </>
        )
    }
}
