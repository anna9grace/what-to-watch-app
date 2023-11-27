import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import FilmListMain from './film-list-main';
import { mockFilms } from '../../../utils/mock';
import { MAX_FILMS_COUNT } from '../../../const';

const initialState = {
  DATA: {
    filteredFilms: mockFilms,
    renderedFilmsCount: MAX_FILMS_COUNT,
  },
};

const mockStore = configureStore({});

describe('Component: FilmListMain', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <FilmListMain />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('films-list')).toBeInTheDocument();
  });
});
