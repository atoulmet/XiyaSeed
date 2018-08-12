import React, { Component, Fragment } from "react";
import "./style.css";

class Picture extends Component {
  render() {
    const { src } = this.props;

    return (
      <Fragment>
        <img src={src} alt={"alt"} />
      </Fragment>
    );
  }
}

export default Picture;
