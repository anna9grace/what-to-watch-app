import React, {useState} from 'react';
import PropTypes from 'prop-types';

import FilmCard from '../film-card/film-card';
import filmProp from '../../pages/film-screen/film.prop';
import { VideoStatus } from '../../../const';

function FilmList(props) {
  const {films} = props;
  const [activeCardId, setActiveCardId] = useState(null);

  return (
    <div className='catalog__films-list' data-testid="films-list">
      {
        films.map((film) => {
          const filmId = film.id;

          return (
            <FilmCard
              key={filmId}
              film={film}
              onMouseEnter={() => {
                setActiveCardId(filmId);
              }}
              onMouseLeave={() => {
                setActiveCardId(null);
              }}
              playingStatus={film.id === activeCardId ? VideoStatus.PLAYING : VideoStatus.STOPPED}
            />
          );
        })
      }
    </div>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default FilmList;
