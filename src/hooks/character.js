import { useEffect, useState } from 'react';
import { getCharacters, getCharacterDetails } from '../services/xfiles-api';

export const useCharacters = page => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    characters
  };
};

export const useCharacter = name => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterDetails(name)
      .then(fetchedCharacter => setCharacter(fetchedCharacter))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    character
  };
};
