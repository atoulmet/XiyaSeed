import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

class Test extends Component {
  render() {
    const { allImages, slideshowIndex } = this.props;
    const isEven = slideshowIndex % 2 === 0;

    return (
      <CSSTransition
        in={isEven}
        timeout={{
          enter: 500,
          exit: 0
        }}
        classNames={{
          enter: "onEnter",
          enterActive: "onEnterActive",
          exit: "onExit",
          exitActive: "onExitActive"
        }}
        unmountOnExit
      >
        <img
          className="test"
          src={allImages[slideshowIndex]}
          alt={"slideshow1"}
        />
      </CSSTransition>
    );
  }
}

export { Test };

class Slide extends Component {
  state = {
    currentIndex: 0,
    shouldMount: false
  };

  render() {
    const { allImages, slideshowIndex } = this.props;

    const isNotEven = slideshowIndex % 2 !== 0;

    console.log("===== isNotEven =====", isNotEven);
    return (
      <CSSTransition
        in={isNotEven}
        timeout={{
          enter: 500,
          exit: 0
        }}
        classNames={{
          enter: "onEnter",
          enterActive: "onEnterActive",
          exit: "onExit",
          exitActive: "onExitActive"
        }}
        unmountOnExit
      >
        {/* <img
            className="test"
            src={allImages[slideshowIndex]}
            alt={"slideshow1"}
            /> */}

        <img
          className="test"
          src={allImages[slideshowIndex]}
          alt={"slideshow1"}
        />
      </CSSTransition>
    );
  }
}

export { Slide };
