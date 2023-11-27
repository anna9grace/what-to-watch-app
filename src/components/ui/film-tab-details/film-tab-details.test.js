import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import { mockFilm } from '../../../utils/mock';
import FilmTabDetails from './film-tab-details';

const filmData = mockFilm;


describe('Component: FilmTabDetails', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <FilmTabDetails
          film={filmData}
        />
      </Router>,
    );

    expect(screen.getByText(`${filmData.director}`)).toBeInTheDocument();
    expect(screen.getByText(`${filmData.genre}`)).toBeInTheDocument();
  });
});
