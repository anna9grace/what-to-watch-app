import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import { mockReviews } from '../../../utils/mock';
import Review from './review';

const reviewData = mockReviews[0];


describe('Component: Review', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <Review
          review={reviewData}
        />
      </Router>,
    );

    expect(getByText(`${reviewData.comment}`)).toBeInTheDocument();
    expect(getByText(`${reviewData.userName}`)).toBeInTheDocument();
  });
});
