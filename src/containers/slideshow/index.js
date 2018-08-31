import React, { Component } from "react";
// import Picture from "../../components/picture";
import "./style.css";

const importAll = r => r.keys().map(r);

const allImages = importAll(
  require.context("../../sources/img", false, /\.(png|JPG|svg)$/)
);

class Slideshow extends Component {
  render() {

    const style= {
        backgroundImage: `url(${allImages[0]})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    return (
      <div className={"slideshow"} style={style}>
        
      </div>
    );
  }
}

export default Slideshow;
