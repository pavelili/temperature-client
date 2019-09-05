import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Location from '../components/Location';
import { getLocation } from '../selectors/locationSelectors';
import { fetchLocation } from '../actions/locationActions';

const locA = {
  name: 'Some place',
  temps: ['123', '23', '44']
};

class LocationDetail extends Component {
  static propTypes = {
    location: PropTypes.object,
    fetch: PropTypes.func,
    match: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
    console.log(this.props.fetch, '### FETCH ###');
    console.log(this.props.match.params.id, '### ID ###');
  }

  render() {
    const { location } = this.props;
    return <Location location={location}/>;
  }
}

const mapStateToProps = (state) => ({
  location: getLocation(state)
});

const mapDispatchToProps = (dispatch, props) => {
  return ({
    fetch() {
      dispatch(fetchLocation(props.match.params.id));
    }
  });};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationDetail);
