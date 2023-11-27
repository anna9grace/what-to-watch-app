import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router, Switch, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import FilmScreen from './film-screen';
import { mockFilm, mockFilms, mockReviews } from '../../../utils/mock';
import { AuthorizationStatus } from '../../../const';

let history;

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
    reviews: mockReviews,
    similarFilms: mockFilms,
    isFilmDataLoaded: true,
  },
  DATA: {
    promoFilm: mockFilm,
  },
};

const mockStore = configureStore({});

describe('Component: FilmScreen', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push('/films/2');
  });

  it('should render correctly', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <FilmScreen filmId='2' />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByTestId('film-tabs-block')).toBeInTheDocument();
    expect(screen.getByTestId('films-list')).toBeInTheDocument();
  });


  it('should render not found screen if film is not exist', () => {
    render(
      <Provider store={mockStore({ ...initialState, FILM: { ...initialState.FILM, currentFilm: null } })}>
        <Router history={history}>
          <FilmScreen filmId='2' />
        </Router>
      </Provider>,
    );


    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });


  it('should redirect to player screen on play button click', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <Switch>
            <Route path="/player/2" exact>
              <h1>This is player screen</h1>
            </Route>
            <Route>
              <FilmScreen filmId='2' />
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/This is player screen/i)).not.toBeInTheDocument();
    userEvent.click(document.querySelector('.film-card__button'));
    expect(screen.queryByText(/This is player screen/i)).toBeInTheDocument();
  });
});
