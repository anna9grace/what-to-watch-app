import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import AddReviewForm from './add-review-form';
import { MAX_RATING } from '../../../const';

const initialState = {
  FILM: {isCommentSending: false},
};


const mockStore = configureStore({});

describe('Component: AddReviewForm', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <AddReviewForm filmId='2'/>
        </Router>
      </Provider>,
    );

    expect(screen.getAllByLabelText(/Rating/i).length).toBe(MAX_RATING);
    expect(screen.getByText(/Post/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('review-textarea'), 'Текст отзыва');

    expect(screen.getByDisplayValue(/Текст отзыва/i)).toBeInTheDocument();
  });
});
