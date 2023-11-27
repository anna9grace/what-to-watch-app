import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

import Logo from './logo';

let history;

describe('Component: Logo', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    const {getByText, getAllByText} = render(
      <Router history={history}>
        <Logo
          isLink
          isFooter
        />
      </Router>,
    );

    expect(getByText('T')).toBeInTheDocument();
    expect(getAllByText('W').length).toBe((2));
  });


  it('should redirect to root url when user clicked to link', () => {
    history.push('/fake');

    render(
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <h1>This is main page</h1>
          </Route>
          <Route>
            <Logo
              isLink
              isFooter
            />
          </Route>
        </Switch>
      </Router>);

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });
});
