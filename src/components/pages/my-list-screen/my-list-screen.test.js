import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import MyListScreen from './my-list-screen';
import { mockFilms } from '../../../utils/mock';
import { AuthorizationStatus } from '../../../const';

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
  DATA: {
    favoriteFilms: mockFilms,
  },
};

const mockStore = configureStore({});

describe('Component: MyListScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/mylist');

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <MyListScreen />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
    expect(screen.getByTestId('films-list')).toBeInTheDocument();
  });
});
