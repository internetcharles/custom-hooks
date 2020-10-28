import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { getCharacterDetails } from '../../services/xfiles-api';
import { MemoryRouter, Route } from 'react-router-dom';
import Details from './Details';

jest.mock('../../services/xfiles-api.js');

describe('Details component', () => {
  it('display a character', () => {
    getCharacterDetails.mockResolvedValue({
      id: 1,
      name: 'James',
      image: 'james.jpg',
      description: 'It James'
    });
    render(<MemoryRouter initialEntries={['/character/1']}>
      <Route path="/character/:name" component={Details} />
    </MemoryRouter>);

    screen.getByText('Loading...');

    return waitFor(() => {
      screen.getByText('James');
      screen.getByText('It James');
    });
  });
});
