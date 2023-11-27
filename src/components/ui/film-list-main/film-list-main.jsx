import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import FilmList from '../film-list/film-list';
import LoadMoreButton from '../load-more-botton/load-more-button';
import { getFilteredFilms, getFilmsCount } from '../../../store/main-data/selectors';
import { getFilmsRenderedCount } from '../../../store/action';

function FilmListMain() {
  const filteredFilms = useSelector(getFilteredFilms);
  const renderedFilmsCount = useSelector(getFilmsCount);
  const dispatch = useDispatch();
  const onShowMoreClick = () => dispatch(getFilmsRenderedCount());

  const filmsToShow = filteredFilms.slice(0, Math.min(filteredFilms.length, renderedFilmsCount));

  return (
    <React.Fragment>
      <FilmList
        films={filmsToShow}
      />

      {
        filteredFilms.length > renderedFilmsCount
        && <LoadMoreButton onShowMoreClick={onShowMoreClick}/>
      }
    </React.Fragment>
  );
}

export default FilmListMain;
