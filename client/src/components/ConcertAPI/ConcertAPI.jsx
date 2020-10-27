import React, { Component } from 'react'
import dateFormat from 'dateformat';
import './ConcertAPI.scss';


export default class ConcertAPI extends Component {
    render() {

        let newDate = dateFormat(this.props.dateTime, 'mmmm dS, yyyy, h:MM:ss TT')

      
        return (
            <div className ="concert__listings">  
            
                <h4>DATE & TIME</h4>              
               <p className="concert__text-style">{newDate}</p>                
                <h4>VENUE NAME</h4>
                <p className="concert__text-style">{this.props.venueName}</p>
                <h4>VENUE LOCATION</h4>
                <p className="concert__text-style">{this.props.venueLocation}</p>
                <a href={this.props.ticketLink} target="_blank" rel="noopener noreferrer"><button className="concert__button">Purchase Tickets</button></a>
            </div>
        )
    }
}
