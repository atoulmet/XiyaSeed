import React, { Component } from "react";

import "./style.css";

class CountrySelect extends Component {
  render() {
    const { selectCountry } = this.props;

    return (
      ///////FAIRE MAPPING
      <div className="countryContainer">
        <div className="countryLink">
          <span>Taiwan</span>
        </div>
        <div className="countryLink" onClick={() => selectCountry("japan")}>
          <span>Japan</span>
        </div>
        <div className="countryLink">
          <span>Thailand</span>
        </div>
        <div className="countryLink">
          <span>HK</span>
        </div>
        <div className="countryLink">
          <span>Australia</span>
        </div>
        <div className="countryLink" onClick={() => selectCountry("korea")}>
          <span>Korea</span>
        </div>
        <div className="countryLink">
          <span>Singapore</span>
        </div>
        <div className="countryLink">
          <span>UK</span>
        </div>
        <div className="countryLink">
          <span>Norway</span>
        </div>
        <div className="countryLink">
          <span>China</span>
        </div>
      </div>
    );
  }
}

export default CountrySelect;
