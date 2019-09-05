import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Location from '../components/Location';
import { getLocation } from '../selectors/locationSelectors';
import { fetchLocation } from '../actions/locationActions';

class LocationDetail extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { location } = this.props;
    return <Location location={location}/>;
  }
}

const mapStateToProps = (state) => ({
  location: getLocation(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchLocation(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationDetail);
