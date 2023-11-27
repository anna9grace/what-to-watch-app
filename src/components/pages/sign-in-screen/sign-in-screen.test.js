import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import SignInScreen from './sign-in-screen';
import { AuthorizationStatus } from '../../../const';


const mockStore = configureStore({});

describe('Component: SignInScreen', () => {
  it('should render "SignInScreen" when user navigate to "login" url', () => {
    const history = createMemoryHistory();
    history.push('/login');

    const initialState = {
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    };

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <SignInScreen />
        </Router>
      </Provider>,
    );

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('email'), 'a@test.ru');
    userEvent.type(screen.getByTestId('password'), 'qwerty');

    expect(screen.getByDisplayValue(/a@test.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/qwerty/i)).toBeInTheDocument();
  });


  it('should redirect to root url if user is authorized', () => {
    const history = createMemoryHistory();
    history.push('/login');

    const initialState = {
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
    };

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <h1>This is main page</h1>
            </Route>
            <Route>
              <SignInScreen />
            </Route>
          </Switch>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });


  it('should show error message if form is not valid', () => {
    const history = createMemoryHistory();
    history.push('/login');

    const initialState = {
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    };

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <SignInScreen />
        </Router>
      </Provider>,
    );

    userEvent.type(screen.getByTestId('email'), 'test');
    userEvent.type(screen.getByTestId('password'), ' ');
    userEvent.click(screen.getByRole('button'));

    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Password field cannot be empty/i)).toBeInTheDocument();
  });
});
