import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import FilmList from '../../ui/film-list/film-list';
import Logo from '../../ui/logo/logo';
import UserBlock from '../../ui/user-block/user-block';
import { getFavoriteFilms } from '../../../store/main-data/selectors';
import { fetchFavoriteFilmsList } from '../../../store/api-actions';

function MyListScreen() {
  const favoriteFilms = useSelector(getFavoriteFilms);

  const dispatch = useDispatch();
  useEffect(() => {
    if (favoriteFilms.length < 1) {
      dispatch(fetchFavoriteFilmsList());
    }
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLink />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={favoriteFilms}/>

      </section>

      <footer className="page-footer">
        <Logo isFooter isLink />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;
