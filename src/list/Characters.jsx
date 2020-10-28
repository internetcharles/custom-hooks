import React from 'react';
import PropTypes from 'prop-types';
import { Character } from './Character';
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/character';

const Characters = ({ page }) => {
  const { loading, characters } = useCharacters(page);

  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character.name}>
      <Link to={`/${character.name}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );

};

Characters.propTypes = {
  page: PropTypes.number
};

export default Characters;


