import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import FilmListMain from '../../ui/film-list-main/film-list-main';
import GenresList from '../../ui/genres-list/genres-list';
import UserBlock from '../../ui/user-block/user-block';
import Logo from '../../ui/logo/logo';
import MyListButton from '../../ui/my-list-button/my-list-button';
import {AppRoutes, AuthorizationStatus} from '../../../const';
import { resetActiveGenre, getFilmsList, resetFilmsRenderedCount } from '../../../store/action';
import { getPromoFilm } from '../../../store/main-data/selectors';
import { getAuthStatus } from '../../../store/user/selectors';


function MainScreen() {
  const promoFilm = useSelector(getPromoFilm);
  const authorizationStatus = useSelector(getAuthStatus);
  const {backgroundImage, name, posterImage, genre, released, id} = promoFilm;
  const dispatch = useDispatch();

  const onPageLeave = () => {
    dispatch(resetActiveGenre());
    dispatch(getFilmsList());
    dispatch(resetFilmsRenderedCount());
  };

  const history = useHistory();

  useEffect(() => onPageLeave);

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${posterImage} poster`} width="218" height="327" />
            </div>

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
                  onClick={() => history.push(`${AppRoutes.PLAYER}/${id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {
                  authorizationStatus === AuthorizationStatus.AUTH
                  && <MyListButton filmId={`${id}`} />
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList/>

          <FilmListMain/>

        </section>

        <footer className="page-footer">
          <Logo isFooter/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default MainScreen;
