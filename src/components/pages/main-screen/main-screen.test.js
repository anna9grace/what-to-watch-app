import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import MainScreen from './main-screen';
import { mockFilm, mockFilms } from '../../../utils/mock';
import { AuthorizationStatus, INITIAL_GENRE } from '../../../const';

const initialState = {
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
    currentFilm: mockFilm,
  },
  DATA: {
    films: mockFilms,
    filteredFilms: mockFilms,
    promoFilm: mockFilm,
  },
};

const mockStore = configureStore({});

describe('Component: MainScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/');

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <MainScreen />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(`${INITIAL_GENRE}`)).toBeInTheDocument();
    expect(screen.getByTestId('films-list')).toBeInTheDocument();
  });
});
