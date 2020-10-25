import React, { Component } from 'react'
import './ConcertAPI.scss'

export default class ConcertAPI extends Component {
    render() {
        return (
            <div className ="concert__listings">  
                <h4>Date & Time</h4>              
               <p>{this.props.dateTime}</p>                
                <h4>Venue Name</h4>
                <p>{this.props.venueName}</p>
                <h4>Venue Location</h4>
                <p>{this.props.venueLocation}</p>
            </div>
        )
    }
}
