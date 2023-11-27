import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import LoadMoreButton from './load-more-button';

const initialState = {};
const mockStore = configureStore({});


describe('Component: LoadMoreButton', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <LoadMoreButton onShowMoreClick={() => {}} />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });


  it('should show more films on button click', () => {
    const history = createMemoryHistory();
    const showMoreHandle = jest.fn();

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <LoadMoreButton onShowMoreClick={showMoreHandle} />
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByText(/Show more/i));
    expect(showMoreHandle).toBeCalled();
  });
});
