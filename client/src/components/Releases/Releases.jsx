import React, { Component } from 'react';




export default class Releases extends Component { 
       
      render () {
        
        return (
            <>
          <div>{this.props.title}</div>
          <div>{this.props.year}</div>
          <img src={this.props.thumb} alt="release" />
          </>
        )
      }
}
