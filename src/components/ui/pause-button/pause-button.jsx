import React from 'react';
import PropTypes from 'prop-types';

function PauseButton(props) {
  const {onPause} = props;

  return (
    <button
      type="button"
      className="player__play"
      onClick={onPause}
    >
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"></use>
      </svg>
      <span>Pause</span>
    </button>
  );
}


PauseButton.propTypes = {
  onPause: PropTypes.func.isRequired,
};

export default PauseButton;
