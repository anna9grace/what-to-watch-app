import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import AddReviewScreen from './add-review-screen';
import { mockFilms } from '../../../utils/mock';
import { AuthorizationStatus } from '../../../const';


const initialState = {
  DATA: {
    films: mockFilms,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    authInfo: {
      'id': 1,
      'email': 'Oliver.conner@gmail.com',
      'name': 'Oliver.conner',
      'avatar_url': 'img/1.png',
      'token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
    },
  },
  FILM: {
    isCommentSending: false,
  },
};


const mockStore = configureStore({});

describe('Component: AddReviewScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/films/2/review');

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <AddReviewScreen filmId='2'/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(`${initialState.DATA.films[1].name}`)).toBeInTheDocument();
    expect(screen.getByTestId('user-block')).toBeInTheDocument();
    expect(screen.getByTestId('add-review-form')).toBeInTheDocument();
  });
});
