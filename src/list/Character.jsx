import React from 'react';
import PropTypes from 'prop-types';

export const Character = ({ name, image, occupation }) => (
  <div>
    <h1>{name}</h1>
    <img src={image} alt={name} />
    <h3>{occupation}</h3>
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired
};
