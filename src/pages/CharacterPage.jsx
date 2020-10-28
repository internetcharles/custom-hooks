import React from 'react';
import { useState } from 'react';
import Characters from '../list/Characters';

const CharacterPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <button
        onClick={() => setPage(page => page - 1)}
        disabled={page <= 1}
      >Prev Page</button>
      <button onClick={() => setPage(page => page + 1)}>Next Page</button>
      <Characters page={page} />
    </>
  );
};

export default CharacterPage;
