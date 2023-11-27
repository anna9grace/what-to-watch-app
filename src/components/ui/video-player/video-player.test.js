import React from 'react';
import {render} from '@testing-library/react';

import { mockFilm } from '../../../utils/mock';
import { VideoStatus } from '../../../const';
import VideoPlayer from './video-player';

const film = mockFilm;


describe('Component: VideoPlayer', () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.load = () => {};
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });

  it('should render correctly', () => {
    const {container} = render(
      <VideoPlayer
        src={film.previewVideoLink}
        posterUrl={film.previewImage}
        playingStatus={VideoStatus.PAUSED}
      />,
    );

    expect(container.querySelector('video')).toBeInTheDocument();
    expect(container.querySelector('video').getAttribute('src')).toEqual(film.previewVideoLink);
  });
});
