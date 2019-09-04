import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LocationList({ locations }) {
  const locationList = locations.map(l => (
    <li key={l._id}>
      <Link to={`/temps/${l._id}`}>{location.name}</Link>
    </li>
  ));

  return <ul>{locationList}</ul>;
}

LocationList.propTypes = {
  locations: PropTypes.array.isRequired
};

export default LocationList;
