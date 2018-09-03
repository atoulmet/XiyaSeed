import React, { Component } from "react";
// import Grid from "./containers/grid";
// import Header from "./components/header";
import { Slide } from "../../components/slide";
import { Test } from "../../components/slide";
import { getPicturesFromCountry } from "./helpers/index.js";
import "./style.css";

class Slideshow extends Component {
  state = {
    slideshowIndex: 0,
    country: "korea"
  };

  render() {
    const { country } = this.state;

    const allImages = getPicturesFromCountry(country);

    const { slideshowIndex } = this.state;
    const next = slideshowIndex < allImages.length - 1 ? slideshowIndex + 1 : 0;
    const prev = slideshowIndex ? slideshowIndex - 1 : allImages.length - 1;

    return (
      <div className="slideshow">
        <div
          onClick={() => this.setState({ country: "japan", slideshowIndex: 0 })}
        >
          Japan
        </div>
        <div
          className="navLinks"
          onClick={() => this.setState({ slideshowIndex: prev })}
        >
          Prev
        </div>
        <Slide allImages={allImages} slideshowIndex={slideshowIndex} />
        <Test allImages={allImages} slideshowIndex={slideshowIndex} />
        <span
          className="navLinks"
          onClick={() => this.setState({ slideshowIndex: next })}
        >
          Next
        </span>
      </div>
    );
  }
}

export default Slideshow;
