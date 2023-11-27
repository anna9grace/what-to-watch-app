import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import FilmList from '../../ui/film-list/film-list';
import Logo from '../../ui/logo/logo';
import FilmTabs from '../../ui/film-tabs/film-tabs';
import UserBlock from '../../ui/user-block/user-block';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import MyListButton from '../../ui/my-list-button/my-list-button';
import { AppRoutes, AuthorizationStatus } from '../../../const';
import { getAuthStatus } from '../../../store/user/selectors';
import { fetchFilmInfo, fetchSimilarFilms, fetchReviews } from '../../../store/api-actions';
import { clearFilm } from '../../../store/action';
import { getCurrentFilm, getReviews, getSimilarFilms, getFilmDataStatus } from '../../../store/film-data/selectors';


function FilmScreen(props) {
  const { filmId } = props;

  const history = useHistory();

  const authorizationStatus = useSelector(getAuthStatus);
  const currentFilm = useSelector(getCurrentFilm);
  const reviews = useSelector(getReviews);
  const similarFilms = useSelector(getSimilarFilms);
  const isFilmDataLoaded = useSelector(getFilmDataStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFilmDataLoaded) {
      dispatch(fetchFilmInfo(filmId));
      dispatch(fetchSimilarFilms(filmId));
      dispatch(fetchReviews(filmId));
    }

    return () => {
      if (isFilmDataLoaded) {
        dispatch(clearFilm());
      }
    };
  }, [filmId, isFilmDataLoaded]);


  if (!isFilmDataLoaded) {
    return <LoadingScreen />;
  }

  if (!currentFilm) {
    return <NotFoundScreen />;
  }

  const { name, posterImage, backgroundImage, genre, released } = currentFilm;

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo isLink />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => history.push(`${AppRoutes.PLAYER}/${filmId}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                {
                  authorizationStatus === AuthorizationStatus.AUTH
                  && <MyListButton filmId={filmId} />
                }


                {
                  authorizationStatus === AuthorizationStatus.AUTH
                  && <Link className="btn film-card__button" to={`${AppRoutes.FILM}/${currentFilm.id}/review`}>Add review</Link>
                }

              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <FilmTabs
              film={currentFilm}
              reviews={reviews}
            />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {similarFilms && <FilmList films={similarFilms} />}

        </section>

        <footer className="page-footer">

          <Logo isFooter isLink />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

FilmScreen.propTypes = {
  filmId: PropTypes.string.isRequired,
};

export default FilmScreen;
