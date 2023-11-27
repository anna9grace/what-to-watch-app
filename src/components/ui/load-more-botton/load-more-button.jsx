import React from 'react';
import PropTypes from 'prop-types';


function LoadMoreButton(props) {
  const {onShowMoreClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMoreClick}
      >
        Show more
      </button>
    </div>
  );
}

LoadMoreButton.propTypes = {
  onShowMoreClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
