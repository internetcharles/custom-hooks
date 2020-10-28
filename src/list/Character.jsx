import React from 'react';
import PropTypes from 'prop-types';

export const Character = ({ name, image }) => (
  <div>
    <h1>{name}</h1>
    <img src={image} alt={name} />
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
