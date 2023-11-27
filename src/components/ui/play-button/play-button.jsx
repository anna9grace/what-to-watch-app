import React from 'react';
import PropTypes from 'prop-types';

function PlayButton(props) {
  const {onPlay} = props;

  return (
    <button
      type="button"
      className="player__play"
      onClick={onPlay}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}


PlayButton.propTypes = {
  onPlay: PropTypes.func.isRequired,
};

export default PlayButton;
