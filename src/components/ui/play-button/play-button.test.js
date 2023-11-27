import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

import PlayButton from './play-button';


describe('Component: PlayButton', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <PlayButton
          onPlay={() => {}}
        />
      </Router>,
    );

    expect(getByText('Play')).toBeInTheDocument();
  });


  it('should play video when play button is clicked', () => {
    const history = createMemoryHistory();
    const playBtnClickHandle = jest.fn();

    render(
      <Router history={history}>
        <PlayButton
          onPlay={playBtnClickHandle}
        />
      </Router>,
    );

    userEvent.click(document.querySelector('.player__play'));
    expect(playBtnClickHandle).toBeCalled();
  });
});
