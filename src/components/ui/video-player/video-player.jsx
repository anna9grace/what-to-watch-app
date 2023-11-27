import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import { PreviewVideoSizes, PREVIEW_VIDEO_DELAY, VideoStatus } from '../../../const';

function VideoPlayer({src, posterUrl, playingStatus}) {
  const videoRef = useRef();

  useEffect(() => {
    const currentPlayer = videoRef.current;
    let playTimeout = null;

    if (currentPlayer && playingStatus === VideoStatus.PLAYING ) {
      playTimeout = setTimeout(() => {
        currentPlayer.play();
      }, PREVIEW_VIDEO_DELAY);
    }

    return (() => {
      clearTimeout(playTimeout);
      currentPlayer.load();
    });

  }, [playingStatus]);

  return (
    <video
      src={playingStatus !== VideoStatus.STOPPED ? src : ''}
      poster={posterUrl}
      ref={videoRef}
      muted
      width={PreviewVideoSizes.WIDTH}
      height={PreviewVideoSizes.HEIGHT}
    />
  );
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  playingStatus: PropTypes.string.isRequired,
};


export default VideoPlayer;
