import React, { Component } from 'react'

export default class ConcertAPI extends Component {
    render() {
        return (
            <div>
                {this.props.dateTime}
                {this.props.onSale}
                {this.props.venueName}
                {this.props.venueLocation}
            </div>
        )
    }
}
