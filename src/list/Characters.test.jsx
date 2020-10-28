import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Characters from './Characters';
import { MemoryRouter } from 'react-router-dom';
import { getCharacters } from '../services/xfiles-api';

jest.mock('../services/xfiles-api.js');

describe('Characters component', () => {
  it('displays a list of characters', async() => {
    getCharacters.mockResolvedValue([
      {
        name: 'Jeff',
        image: 'jeff.jpg'
      }
    ]);
    render(<MemoryRouter>
      <Characters />
    </MemoryRouter>);

    screen.getByText('Loading...');

    const characterList = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});
