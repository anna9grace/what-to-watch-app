import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router, Switch, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import UserBlock from './user-block';

import { AuthorizationStatus } from '../../../const';

const mockStore = configureStore({});

let history;

describe('Component: UserBlock', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly if user is authorized', () => {
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
    };

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <UserBlock />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.getByAltText('User avatar')).toBeInTheDocument();
  });


  it('should render correctly if user is not authorized', () => {
    const initialState = {
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      },
    };

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <UserBlock />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });


  it('should redirect to /login if user is unauthorized', () => {
    const initialState = {
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      },
    };

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <Switch>
            <Route path="/login" exact>
              <h1>This is sign-in page</h1>
            </Route>
            <Route>
              <UserBlock />
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/This is sign-in page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.queryByText(/This is sign-in page/i)).toBeInTheDocument();
  });


  it('should redirect to /mylist if user is unauthorized', () => {
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
    };

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <Switch>
            <Route path="/mylist" exact>
              <h1>This is my favorite films page</h1>
            </Route>
            <Route>
              <UserBlock />
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/This is my favorite films page/i)).not.toBeInTheDocument();
    expect(document.querySelector('.user-block__avatar')).toBeInTheDocument();
    userEvent.click(document.querySelector('.user-block__avatar'));
    expect(screen.queryByText(/This is my favorite films page/i)).toBeInTheDocument();
  });
});
