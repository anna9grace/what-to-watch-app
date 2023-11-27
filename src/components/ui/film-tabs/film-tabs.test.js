import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

import { mockFilm, mockReviews } from '../../../utils/mock';
import { FilmTabsNames } from '../../../const';
import FilmTabs from './film-tabs';

const filmData = mockFilm;

const reviewsData = mockReviews;


describe('Component: FilmTabs', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <FilmTabs
          film={filmData}
          reviews={reviewsData}
        />
      </Router>,
    );

    expect(screen.getByTestId('film-tabs-list')).toBeInTheDocument();
    expect(screen.getByTestId('film-tabs')).toBeInTheDocument();
  });


  it('should switch to active film tab', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <FilmTabs
          film={filmData}
          reviews={reviewsData}
        />
      </Router>,
    );

    expect(screen.getByText(/ratings/i)).toBeInTheDocument();
    expect(screen.queryByText('Released')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-tab-reviews')).not.toBeInTheDocument();

    userEvent.click(screen.getByText(FilmTabsNames.DETAILS));
    expect(screen.getByText('Released')).toBeInTheDocument();

    userEvent.click(screen.getByText(FilmTabsNames.REVIEWS));
    expect(screen.getByTestId('film-tab-reviews')).toBeInTheDocument();
  });
});
