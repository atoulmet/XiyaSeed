import React, { Component } from "react";
import Grid from "./containers/grid";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid />
        {/* <img src={allImages[0]} /> */}
      </div>
    );
  }
}

export default App;
