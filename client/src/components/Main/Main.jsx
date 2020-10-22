import React, { Component } from 'react';
import './Main.scss'
import animatedLogo from '../../assets/Logo-movie-wide.mp4';
import search from '../../assets/Search.svg';
import { Link , withRouter , Redirect } from 'react-router-dom'


export default class Main extends Component {

   
   
    render() {

        if (this.props.redirect) {
            return <Redirect to="/MainTwo" />
        }
        return (
            <>
            <div className="main">
                <video src={animatedLogo} autoPlay loop className="main__logo" alt="Logo" />
                <form className="main__form" onSubmit={this.props.handleSubmit}>                        
                     <input type="text" 
                     className="main__search" 
                     placeholder="Search your favourite artist name here..."
                     value={this.props.searchName} 
                     onChange={this.props.onChange}                     
                     />              
                </form>
            </div>
            </>
        )
    }
}
