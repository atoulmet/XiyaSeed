import React, { Component } from "react";
import chunk from "lodash/fp/chunk";
import concat from "lodash/fp/concat";
import InfiniteScroll from "react-infinite-scroller";
import Picture from "../../components/picture";
import { getPicturesFromCountry } from "../helpers/index.js";

import "./style.css";

const importAll = r => r.keys().map(r);

// const allImages = importAll(
//   require.context("../../sources/img", false, /\.(png|JPG|svg)$/)
// );

class Grid extends Component {
  state = {
    allImages: [],
    page: 1,
    hasMore: true,
    columns: [
      [this.props.allImages[0]],
      [this.props.allImages[1]],
      [this.props.allImages[2]]
    ]
  };

  componentWillReceiveProps(props, state) {
    const { allImages } = props;
    console.log(
      "===== allImages !== state.allImages =====",
      allImages !== state.allImages
    );
    if (allImages !== state.allImages) {
      const newColumns = [[allImages[0]], [allImages[1]], [allImages[2]]];
      console.log("===== newColumns =====", newColumns);
      this.setState({
        allImages: allImages,
        columns: newColumns,
        page: 2,
        hasMore: true
      });
    }
  }

  loadMore = () => {
    const { columns, page } = this.state;
    const { allImages } = this.props;

    const start = page * 3;
    const end = start + 3;
    const hasMore = end <= allImages.length;

    // const hasMore = false;
    if (hasMore) {
      const picsToAdd = allImages.slice(start, end);
      const newColumns = columns.map((col, i) => concat(col, picsToAdd[i]));
      this.setState({ columns: newColumns, hasMore, page: page + 1 });
    }
  };

  render() {
    const { hasMore, columns } = this.state;
    const { allImages } = this.props;

    // const allImages = getPicturesFromCountry(country);
    console.log("===== columns =====", columns);
    // const picturesPerColumn = Math.floor(picturesList.length / 3);

    // const rows = chunk(picturesPerColumn, picturesList);
    const pictures = columns.map((col, i) => (
      <div className="column" key={`column${i}`}>
        {col.map(pic => (
          <Picture key={`path=${pic}`} src={pic} />
        ))}
      </div>
    ));

    return (
      <InfiniteScroll
        pageStart={1}
        loadMore={this.loadMore}
        hasMore={hasMore}
        // loader={
        //   <div className="loader" key={0}>
        //     Loading ...
        //   </div>
        // }
        className={"rowContainer"}
      >
        {/* <div className={"rowContainer"}> */}
        <div className={"row"}>{pictures}</div>
        {/* </div> */}
      </InfiniteScroll>
    );
  }
}

export default Grid;
