import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import { mockReviews } from '../../../utils/mock';
import FilmTabReviews from './film-tab-reviews';

const reviewsData = mockReviews;


describe('Component: FilmTabReviews', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <FilmTabReviews
          reviews={reviewsData}
        />
      </Router>,
    );

    expect(screen.getByText(`${reviewsData[0].comment}`)).toBeInTheDocument();
    expect(screen.getByText(`${reviewsData[1].userName}`)).toBeInTheDocument();
  });
});
