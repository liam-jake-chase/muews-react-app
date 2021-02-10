import React, { Component } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Gallery.scss";

export default class Gallery extends Component {
  render() {
    return (
      <>
        <CarouselProvider
          naturalSlideWidth={5}
          naturalSlideHeight={4.5}
          totalSlides={3}
          isPlaying={true}
        >
          <Slider className="slides-wrapper">
            <Slide index={0}>
              <img className="slides" src={this.props.imageTwo} alt="slide" />
            </Slide>
            <Slide index={1}>
              <img className="slides" src={this.props.imageThree} alt="slide" />
            </Slide>
            <Slide index={2}>
              <img className="slides" src={this.props.imageFour} alt="slide" />
            </Slide>
          </Slider>
        </CarouselProvider>
      </>
    );
  }
}
