import { useEffect, useState } from 'react';
import { getCharacters, getCharacter } from '../services/xfiles-api';

export const useCharacters = page => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
      .then(fetchedCharacters => setCharacters(fetchedCharacters))
      .finally(() => setLoading(false));
  }, [page]);

  return {
    loading,
    characters
  };
};
