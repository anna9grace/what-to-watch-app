import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getFilms } from '../../../store/main-data/selectors';
import VideoPlayerFull from '../../ui/video-player-full/video-player-full';
import PlayButton from '../../ui/play-button/play-button';
import PauseButton from '../../ui/pause-button/pause-button';
import { VideoStatus } from '../../../const';
import { transformDuration } from '../../../utils/utils';

const SECONDS_IN_MINUTE = 60;
const getProgressLevel = (max, current) => current / max * 100;

function PlayerScreen(props) {
  const { filmId } = props;
  const films = useSelector(getFilms);
  const { name, backgroundImage, videoLink, runTime } = films.find((film) => film.id === +filmId);

  const history = useHistory();

  const [playingStatus, setPlayingStatus] = useState(VideoStatus.STOPPED);
  const [isFullMode, setIsFullMode] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [videoDuration, setVideoDuration] = useState(runTime * SECONDS_IN_MINUTE);
  const [currentTime, setCurrentTime] = useState(0);

  const onVideoPlaying = () => playingStatus !== VideoStatus.PLAYING && isVideoReady && setPlayingStatus(VideoStatus.PLAYING);
  const onVideoPause = () => playingStatus !== VideoStatus.PAUSED && isVideoReady && setPlayingStatus(VideoStatus.PAUSED);

  return (
    <div className="player">
      <VideoPlayerFull
        src={videoLink}
        posterUrl={backgroundImage}
        playingStatus={playingStatus}
        isFullMode={isFullMode}
        isVideoReady={isVideoReady}
        onPlaying={onVideoPlaying}
        onPause={onVideoPause}
        onFullModeEnter={() => setIsFullMode(false)}
        onStart={(duration) => setVideoDuration(duration)}
        onProgress={(time) => setCurrentTime(time)}
        onReadyStatusChange={() => setIsVideoReady(true)}
      />
      <button
        type="button"
        className="player__exit"
        onClick={() => history.goBack()}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              max="100"
              value={getProgressLevel(videoDuration, currentTime)}
            />
            <div
              className="player__toggler"
              style={{ left: `${getProgressLevel(videoDuration, currentTime)}%` }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{transformDuration(videoDuration - currentTime)}</div>
        </div>
        <div className="player__controls-row">

          {
            playingStatus === VideoStatus.PLAYING
              ? <PauseButton onPause={() => isVideoReady && setPlayingStatus(VideoStatus.PAUSED)} />
              : <PlayButton disabled onPlay={() => isVideoReady && setPlayingStatus(VideoStatus.PLAYING)} />
          }

          <div className="player__name">{name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => setIsFullMode(true)}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

PlayerScreen.propTypes = {
  filmId: PropTypes.string.isRequired,
};


export default PlayerScreen;
