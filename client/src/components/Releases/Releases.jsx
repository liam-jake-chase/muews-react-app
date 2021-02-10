import React, { Component } from "react";
import './Releases.scss'

export default class Releases extends Component {
  render() {
    return (
      <>
      
        <div className="releases-wrapper">
          <div>{this.props.title}</div>
          <div>{this.props.year}</div>
          <br />
          <img src={this.props.thumb} alt="release" />
          <br />
          <br />
        </div>
      </>
    );
  }
}
