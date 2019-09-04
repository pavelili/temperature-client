import React from 'react';
import PropTypes from 'prop-types';

function Location({ location }) {
  const tempList = location.temps.map(t => (
    <li key={t.id}>{t}</li>
  ));

  return (
    <section>
      <h1>{location.name}</h1>
      <ul>{tempList}</ul>
    </section>
  );
}

Location.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    temps: PropTypes.array.isRequired
  }).isRequired
};

export default Location;
