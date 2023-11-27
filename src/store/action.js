import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO_FILM: 'data/loadPromoFilm',
  LOAD_FAVORITE_FILMS: 'data/loadFavoriteFilms',
  GET_FILMS_LIST: 'data/getFilmsList',
  LOAD_FILM: 'film/loadFilm',
  LOAD_REVIEWS: 'film/loadReviews',
  LOAD_SIMILAR_FILMS: 'film/loadSimilarFilms',
  SET_IS_LOADED: 'film/setIsLoaded',
  SET_IS_SENDING: 'film/setIsCommentSending',
  CHANGE_ACTIVE_GENRE: 'filter/changeActiveGenre',
  RESET_ACTIVE_GENRE: 'filter/resetActiveGenre',
  GET_FILMS_RENDERED_COUNT: 'filter/getFilmsRenderedCount',
  RESET_FILMS_RENDERED_COUNT: 'filter/resetFilmsRenderedCount',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  UPDATE_FILM: 'film/updateFilm',
  CLEAR_FILM: 'film/clearFilm',
  UPDATE_PROMO_FILM: 'data/updatePromoFilm',
};


export const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({
  payload: films,
}));

export const  loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, (film) => ({
  payload: film,
}));

export const loadFavoriteFilms = createAction(ActionType.LOAD_FAVORITE_FILMS, (films) => ({
  payload: films,
}));

export const loadFilm = createAction(ActionType.LOAD_FILM, (film) => ({
  payload: film,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const loadSimilarFilms = createAction(ActionType.LOAD_SIMILAR_FILMS, (films) => ({
  payload: films,
}));

export const setIsLoaded = createAction(ActionType.SET_IS_LOADED);

export const setCommentIsSending = createAction(ActionType.SET_IS_SENDING, (isSending) => ({
  payload: isSending,
}));

export const changeActiveGenre = createAction(ActionType.CHANGE_ACTIVE_GENRE, (genre) => ({
  payload: genre,
}));

export const resetActiveGenre = createAction(ActionType.RESET_ACTIVE_GENRE);

export const getFilmsList = createAction(ActionType.GET_FILMS_LIST);

export const getFilmsRenderedCount = createAction(ActionType.GET_FILMS_RENDERED_COUNT);

export const resetFilmsRenderedCount = createAction(ActionType.RESET_FILMS_RENDERED_COUNT);

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status, data) => ({
  payload: {
    authStatus: status,
    authInfo: data ? data : {},
  },
}));

export const logout = createAction(ActionType.LOGOUT);

export const updateFilm = createAction(ActionType.UPDATE_FILM);

export const clearFilm = createAction(ActionType.CLEAR_FILM);

export const updatePromoFilm = createAction(ActionType.UPDATE_PROMO_FILM);

