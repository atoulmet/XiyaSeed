import React, { Component } from "react";
// import Grid from "./containers/grid";
// import Header from "./components/header";
import { Slide } from "../../components/slide";
// import { Test } from "../../components/slide";
import { SlideNav } from "../../components/slideNav";
import CountrySelect from "../../components/countrySelect";

import { getPicturesFromCountry } from "../helpers/index.js";

import "./style.css";

class Slideshow extends Component {
  state = {
    slideshowIndex: 0
  };

  render() {
    const { selectCountry, allImages } = this.props;

    const { slideshowIndex } = this.state;
    const next = slideshowIndex < allImages.length - 1 ? slideshowIndex + 1 : 0;
    const prev = slideshowIndex ? slideshowIndex - 1 : allImages.length - 1;

    return (
      <div className="slideshow">
        <CountrySelect selectCountry={selectCountry} />
        <SlideNav
          onPrev={() => this.setState({ slideshowIndex: prev })}
          onNext={() => this.setState({ slideshowIndex: next })}
        >
          <Slide allImages={allImages} slideshowIndex={slideshowIndex} />
          {/* <Test allImages={allImages} slideshowIndex={slideshowIndex} /> */}
        </SlideNav>
        {/* <span
          className="navLinks"
          onClick={() => this.setState({ slideshowIndex: next })}
        >
          Next
          https://www.npmjs.com/package/react-masonry-infinite
        </span> */}
      </div>
    );
  }
}

export default Slideshow;
