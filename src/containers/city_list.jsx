import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setCities } from '../actions';

import City from './city';

class CityList extends Component {

  componentWillMount () {
    this.props.setCities();
  }

  render () {
    return (
      <div className="list-group-item cities">
      {this.props.cities.map((city, index) => <City city={city} key={index} />)}
      </div>
      )
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { setCities: setCities},
      dispatch
    );
  }

  function mapReduxStateToProps(reduxState) {
    return {
      cities: reduxState.cities
    }
  }

  export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);
