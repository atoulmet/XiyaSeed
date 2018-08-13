import React, { Component } from "react";
import chunk from "lodash/fp/chunk";
import Picture from "../../components/picture";
import "./style.css";

const importAll = r => r.keys().map(r);

const allImages = importAll(
  require.context("../../sources/img", false, /\.(png|JPG|svg)$/)
);

class Grid extends Component {
  render() {
    const picturesPerColumn = Math.floor(allImages.length / 3);

    const rows = chunk(picturesPerColumn, allImages);
    const test = rows.map((row, i) => (
      <div className="column" key={`column${i}`}>
        {row.map(pic => (
          <Picture key={`path=${pic}`} src={pic} />
        ))}
      </div>
    ));

    return (
      <div className={"rowContainer"}>
        <div className={"row"}>{test}</div>
      </div>
    );
  }
}

export default Grid;
