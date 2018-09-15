import React, { Component } from "react";
import "./style.css";

class SlideNav extends Component {
  render() {
    const { children, onPrev, onNext } = this.props;

    return (
      <div className="slideWrapper">
        <div className="navWrapper">
          <div onClick={onPrev} className="prevNav" />
          <div onClick={onNext} className="nextNav" />
        </div>
        {children}
      </div>
    );
  }
}

export { SlideNav };
