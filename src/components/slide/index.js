import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

class Slide extends Component {
  state = {
    currentIndex: 0,
    shouldMount: false,
    afterMounting: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ afterMounting: true }), 3);
  }

  render() {
    const { allImages, slideshowIndex } = this.props;

    const isNotEven = slideshowIndex % 2 !== 0;
    const { afterMounting } = this.state;

    return (
      <CSSTransition
        in={true}
        timeout={{
          enter: 0,
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
        <div className="slideWrapper">
          <div
            className={afterMounting ? "slide" : "slideUnactive"}
            style={{
              backgroundImage: `url(${allImages[slideshowIndex]})`
            }}
          >
            {/* <img
          className="test"
          src={allImages[slideshowIndex]}
          alt={"slideshow1"}
        /> */}
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export { Slide };
