import React, { Component } from "react";
import "./style.css";
import test from "../../sources/text/test.json";

class Picture extends Component {
  constructor() {
    super();
    this.state = {
      test: false
    };
  }
  test = e => {
    //Warning: the key has to be the same as the filename
    console.log("TEST", e.target, test["01"]);
    this.setState({ test: true });
  };

  render() {
    const { src } = this.props;

    const translation =
      src === "/static/media/1.f97d9cce.JPG" && this.state.test ? true : false;
    console.log(translation);
    const style = translation ? { marginBottom: "150px" } : {};
    return (
      <div onClick={this.test}>
        <img src={src} alt={"alt"} style={style} />
      </div>
    );
  }
}

export default Picture;
