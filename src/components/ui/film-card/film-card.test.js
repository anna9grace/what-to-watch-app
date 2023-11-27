import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import { VideoStatus } from '../../../const';
import { mockFilm } from '../../../utils/mock';
import FilmCard from './film-card';

const filmData = mockFilm;


describe('Component: FilmCard', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <FilmCard
          film={filmData}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          playingStatus={VideoStatus.STOPPED}
        />
      </Router>,
    );

    expect(getByText(`${filmData.name}`)).toBeInTheDocument();
  });
});
