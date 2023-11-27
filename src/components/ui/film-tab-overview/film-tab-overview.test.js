import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import { mockFilm } from '../../../utils/mock';
import FilmTabOverview from './film-tab-overview';

const filmData = mockFilm;


describe('Component: FilmTabOverview', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <FilmTabOverview
          film={filmData}
        />
      </Router>,
    );

    expect(screen.getByText(`${filmData.description}`)).toBeInTheDocument();
    expect(screen.getByText(`${filmData.director}`, { exact: false })).toBeInTheDocument();
  });
});
