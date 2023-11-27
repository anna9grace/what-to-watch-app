import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

import PauseButton from './pause-button';


describe('Component: PauseButton', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <PauseButton
          onPause={() => {}}
        />
      </Router>,
    );

    expect(getByText('Pause')).toBeInTheDocument();
  });


  it('should pause video when pause button is clicked', () => {
    const history = createMemoryHistory();
    const pauseBtnClickHandle = jest.fn();

    render(
      <Router history={history}>
        <PauseButton
          onPause={pauseBtnClickHandle}
        />
      </Router>,
    );

    userEvent.click(document.querySelector('.player__play'));
    expect(pauseBtnClickHandle).toBeCalled();
  });
});
