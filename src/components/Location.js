import React from 'react';
import PropTypes from 'prop-types';

function Location({ location, temps }) {
  const tempList = temps.map(t => (
    <li key={t.id}>{t}</li>
  ));

  return (
    <section>
      <h1>{location}</h1>
      <ul>{tempList}</ul>
    </section>
  );
}

Location.propTypes = {
  location: PropTypes.string.isRequired,
  temps: PropTypes.array.isRequired
};

export default Location;
