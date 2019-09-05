import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLocations } from '../selectors/homeSelectors';
import { fetchLocations } from '../actions/homeActions';
import LocationList from '../components/LocationList';

class AllLocations extends Component {
  static propTypes = {
    locations: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { locations } = this.props;
    return <LocationList locations={locations}/>;
  }
}

const mapStateToProps = state => ({
  locations: getLocations(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchLocations());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllLocations);
