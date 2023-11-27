import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import { mockFilms } from '../../../utils/mock';
import FilmList from './film-list';

const filmsData = mockFilms;


describe('Component: FilmList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <FilmList
          films={filmsData}
        />
      </Router>,
    );

    expect(screen.getByText(`${filmsData[0].name}`)).toBeInTheDocument();
    expect(screen.getByText(`${filmsData[1].name}`)).toBeInTheDocument();
  });
});
