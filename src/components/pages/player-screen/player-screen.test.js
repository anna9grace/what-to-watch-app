import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import { mockFilms } from '../../../utils/mock';
import PlayerScreen from './player-screen';

const initialState = {
  DATA: {
    films: mockFilms,
  },
};

let history;
const mockStore = configureStore({});

describe('Component: PlayerScreen', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push('/player/2');
  });

  it('should render correctly', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <PlayerScreen filmId='2'/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
    expect(screen.getByTestId('player')).toBeInTheDocument();
    expect(document.querySelector('.player__play')).toBeInTheDocument();
    expect(document.querySelector('.player__exit')).toBeInTheDocument();
    expect(document.querySelector('.player__video')).toBeInTheDocument();
  });


  it('should redirect to root url when user clicked to link', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <PlayerScreen filmId='2'/>
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(document.querySelector('.player__exit'));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });


  it('should switch player to full mode', () => {
    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <PlayerScreen filmId='2'/>
        </Router>
      </Provider>,
    );

    userEvent.click(document.querySelector('.player__full-screen'));
    expect(Document.fullscreenElement).not.toBe(null);
  });
});
