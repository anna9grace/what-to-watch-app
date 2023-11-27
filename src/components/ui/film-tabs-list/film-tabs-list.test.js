import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import FilmTabsList from './film-tabs-list';
import { FilmTabsNames } from '../../../const';

describe('Component: FilmTabList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <FilmTabsList
          activeTab={FilmTabsNames.REVIEWS}
          tabClickHandler={() => {}}
        />
      </Router>,
    );

    expect(screen.getByText(`${FilmTabsNames.REVIEWS}`)).toBeInTheDocument();
    expect(screen.getByText(`${FilmTabsNames.OVERVIEW}`)).toBeInTheDocument();
    expect(screen.getByText(`${FilmTabsNames.DETAILS}`)).toBeInTheDocument();
  });
});
