import React, { Component } from "react";
import Grid from "./containers/grid";
import Header from "./components/header";
import Slideshow from "./containers/slideshow";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slideshow />
        <Grid />
        {/* <img src={allImages[0]} /> */}
      </div>
    );
  }
}

export default App;
