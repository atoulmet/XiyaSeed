import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";
import test from "../../sources/text/test.json";

class Picture extends Component {
  state = {
    test: false,
    afterMounting: false
  };
  test = e => {
    //Warning: the key has to be the same as the filename
    console.log("TEST", e.target, test["01"]);
    this.setState({ test: true });
  };

  componentDidMount() {
    setTimeout(() => this.setState({ afterMounting: true }), 3);
  }

  render() {
    const { src } = this.props;
    const { afterMounting } = this.state;

    const translation =
      src === "/static/media/1.f97d9cce.JPG" && this.state.test ? true : false;

    const style = translation ? { marginBottom: "200px" } : {};
    return (
      <CSSTransition
        in={true}
        timeout={{
          enter: 500,
          exit: 0
        }}
        classNames={{
          enter: "onEnter",
          enterActive: "onEnterActive"
        }}
      >
        <div onClick={this.test}>
          <img
            src={src}
            alt={"alt"}
            style={style}
            className={afterMounting ? "onEnterActive" : "onEnter"}
          />
        </div>
      </CSSTransition>
    );
  }
}

export default Picture;
