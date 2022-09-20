import React, { Component } from "react";
import { connect } from "react-redux";

class ActiveCity extends Component {
  render() {

    if (!this.props.selectedCity) {
      return (
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      );
    }

    console.log(this.props.city);
    let url = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`

    return (
      <div className="active-city">
        <h3>{this.props.selectedCity.name}</h3>
        <p>{this.props.selectedCity.address}</p>
        <img src={url} alt="" />
      </div>
    )
  };
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedCity: reduxState.selectedCity
  }
}

export default connect(mapReduxStateToProps)(ActiveCity);
