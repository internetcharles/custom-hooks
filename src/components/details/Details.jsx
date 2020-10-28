import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../hooks/character';

const Details = () => {
  const { id } = useParams();
  const { loading, character } = useCharacter(id);
  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <p>{character.name}</p>
      <img src={character.image} alt={character.name} />
      <p>{character.description}</p>
    </>
  );
};

export default Details;
