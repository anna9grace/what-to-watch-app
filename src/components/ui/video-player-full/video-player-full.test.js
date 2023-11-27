import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import { mockFilm } from '../../../utils/mock';
import { VideoStatus } from '../../../const';
import VideoPlayerFull from './video-player-full';

const film = mockFilm;


describe('Component: VideoPlayerFull', () => {
  it('should render correctly', () => {
    const {container} = render(
      <VideoPlayerFull
        src={film.videoLink}
        posterUrl={film.backgroundImage}
        isFullMode={false}
        playingStatus={VideoStatus.PAUSED}
        isVideoReady
        onPlaying={jest.fn()}
        onPause={jest.fn()}
        onFullModeEnter={jest.fn()}
        onStart={jest.fn()}
        onProgress={jest.fn()}
        onReadyStatusChange={jest.fn()}
      />,
    );

    expect(container.querySelector('video')).toBeInTheDocument();
  });


  it('should play / pause video', () => {
    const playVideoHandle = jest.fn();
    const pauseVideoHandle = jest.fn();

    const {container} = render(
      <VideoPlayerFull
        src={film.videoLink}
        posterUrl={film.backgroundImage}
        isFullMode={false}
        playingStatus={VideoStatus.PAUSED}
        isVideoReady
        onPlaying={playVideoHandle}
        onPause={pauseVideoHandle}
        onFullModeEnter={jest.fn()}
        onStart={jest.fn()}
        onProgress={jest.fn()}
        onReadyStatusChange={jest.fn()}
      />,
    );

    fireEvent(container.querySelector('video'), new Event('playing'));
    expect(playVideoHandle).toBeCalled();
    fireEvent(container.querySelector('video'), new Event('pause'));
    expect(pauseVideoHandle).toBeCalled();
  });
});
