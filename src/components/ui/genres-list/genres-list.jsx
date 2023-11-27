import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { makeItemsUnique } from '../../../utils/utils';
import { INITIAL_GENRE, MAX_GENRES_COUNT } from '../../../const';
import { changeActiveGenre, getFilmsList, resetFilmsRenderedCount } from '../../../store/action';
import { getFilms } from '../../../store/main-data/selectors';

export const getUniqueGenres = (films) => {
  const genres = films.map((film) => film.genre);
  return makeItemsUnique(genres);
};


function GenresList() {
  const films = useSelector(getFilms);
  const uniqueGenres = getUniqueGenres(films).slice(0, MAX_GENRES_COUNT);
  const [activeGenre, setActiveGenre] = useState(INITIAL_GENRE);

  const dispatch = useDispatch();
  const onGenreChange = (genre) => {
    setActiveGenre(genre);
    dispatch(changeActiveGenre(genre));
    dispatch(getFilmsList());
    dispatch(resetFilmsRenderedCount());
  };

  const genres = [INITIAL_GENRE, ...uniqueGenres];

  return (
    <ul className="catalog__genres-list">

      {genres.map((genre) => (
        <li
          className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`}
          key={genre}
        >
          <a
            href="link/href"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onGenreChange(genre);
            }}
          >
            {genre}
          </a>
        </li>
      ))}

    </ul>
  );
}

export default GenresList;
