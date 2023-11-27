import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const renderLogoLetters = () => (
  <React.Fragment>
    <span className="logo__letter logo__letter--1">W</span>
    <span className="logo__letter logo__letter--2">T</span>
    <span className="logo__letter logo__letter--3">W</span>
  </React.Fragment>
);

const renderLogoActive = (isFooter) => (
  <div className="logo">
    <Link className={`logo__link ${isFooter ? 'logo__link--light' : ''}`} to='/'>
      {renderLogoLetters()}
    </Link>
  </div>
);

const renderLogoInactive = (isFooter) => (
  <div className="logo">
    <p className={`logo__link ${isFooter ? 'logo__link--light' : ''}`}>
      {renderLogoLetters()}
    </p>
  </div>
);

function Logo(props) {
  const {isLink, isFooter} = props;

  return isLink
    ? renderLogoActive(isFooter)
    : renderLogoInactive(isFooter);
}

Logo.propTypes = {
  isLink: PropTypes.bool,
  isFooter: PropTypes.bool,
};

export default Logo;
