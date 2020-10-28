import fetch from 'node-fetch';

export const getCharacters = (page) => {
  // eslint-disable-next-line max-len
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=3&page=${page}`)
    .then(res => res.json())
    .then(json => json.results.map(character => ({
      name: character.name,
      image: character.image
    })));
};

export const getCharacterDetails = (name) => {
  // eslint-disable-next-line max-len
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?name=${name}`)
    .then(res => res.json())
    .then(json => json.map(character => ({
      name: character.name,
      image: character.image,
      description: character.description,
    })));
};
