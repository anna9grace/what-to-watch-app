import React from 'react';
import PropTypes from 'prop-types';

import { FilmTabsNames } from '../../../const';

function FilmTabsList(props) {
  const {activeTab, onTabClick} = props;

  return (
    <ul className="film-nav__list" data-testid="film-tabs-list">
      {
        Object.keys(FilmTabsNames).map((button) => {
          const currentTab = FilmTabsNames[button];

          return (
            <li
              key={currentTab}
              className={`film-nav__item ${currentTab === activeTab ? 'film-nav__item--active' : ''}`}
            >
              <a
                href="/"
                className="film-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onTabClick(currentTab);
                }}
              >
                {currentTab}
              </a>
            </li>
          );
        })
      }
    </ul>
  );
}

FilmTabsList.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default FilmTabsList;
