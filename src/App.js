import React, { Component } from "react";
import Grid from "./containers/grid";
import Header from "./components/header";
import Slideshow from "./containers/slideshow";

import { getPicturesFromCountry } from "./containers/helpers/index.js";

class App extends Component {
  state = {
    country: "korea"
  };

  selectCountry = country => {
    this.setState({ country });
  };

  render() {
    const { country } = this.state;
    const allImages = getPicturesFromCountry(country);

    return (
      <div className="App">
        <Header />
        <Slideshow allImages={allImages} selectCountry={this.selectCountry} />
        <Grid allImages={allImages} />
        {/* <img src={allImages[0]} /> */}
      </div>
    );
  }
}

export default App;
