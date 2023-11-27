import React, { useState } from 'react';
import PropTypes from 'prop-types';

import reviewProp from '../review/review.prop';
import FilmTabsList from '../film-tabs-list/film-tabs-list';
import FilmTabOverview from '../film-tab-overview/film-tab-overview';
import FilmTabDetails from '../film-tab-details/film-tab-details';
import FilmTabReviews from '../film-tab-reviews/film-tab-reviews';
import filmProp from '../../pages/film-screen/film.prop';
import { FilmTabsNames } from '../../../const';

const renderFilmTabs = (film, reviews, activeTab) => {
  switch(activeTab) {
    case FilmTabsNames.DETAILS:
      return (
        <FilmTabDetails
          film={film}
        />
      );

    case FilmTabsNames.REVIEWS:
      return (
        <FilmTabReviews
          reviews={reviews}
        />
      );

    default:
      return (
        <FilmTabOverview
          film={film}
        />
      );
  }
};

function FilmTabs(props) {
  const [activeTab, setAсtiveTab] = useState(FilmTabsNames.OVERVIEW);
  const {film, reviews}  = props;

  return (
    <div className="film-card__desc" data-testid="film-tabs-block">
      <nav className="film-nav film-card__nav">

        <FilmTabsList
          activeTab={activeTab}
          onTabClick={(tab) => {
            setAсtiveTab(tab);
          }}
        />
      </nav>

      {renderFilmTabs(film, reviews, activeTab)}

    </div>
  );
}

FilmTabs.propTypes = {
  film: filmProp,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default FilmTabs;
