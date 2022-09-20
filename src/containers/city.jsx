import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }


  render() {
    let classes = "city list-group-item";
    if (this.props.city === this.props.selectedCity) {
      classes += " selected";
    }

    return (
      <div className={classes} onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    )
  };
}

import { selectCity } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity
    },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedCity: reduxState.selectedCity
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(City);
