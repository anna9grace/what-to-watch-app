import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

import Logo from '../../ui/logo/logo';
import AddReviewForm from '../../ui/add-review-form/add-review-form';
import UserBlock from '../../ui/user-block/user-block';
import { AppRoutes } from '../../../const';
import { getFilms } from '../../../store/main-data/selectors';

function AddReviewScreen(props) {
  const { filmId } = props;

  const films = useSelector(getFilms);

  const film = films.find((filmTtem) => filmTtem.id === +filmId);
  const { name, backgroundImage, posterImage } = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo isLink/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`${AppRoutes.FILM}/${film.id}`}>{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm
        filmId={filmId}
      />
    </section>
  );
}

AddReviewScreen.propTypes = {
  filmId: PropTypes.string.isRequired,
};

export default AddReviewScreen;
