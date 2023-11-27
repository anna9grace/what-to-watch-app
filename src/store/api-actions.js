import { toast } from 'react-toastify';

import { loadFilms, loadPromoFilm, loadFavoriteFilms, requireAuthorization, logout, loadFilm, loadSimilarFilms, loadReviews, setIsLoaded, setCommentIsSending, updateFilm, updatePromoFilm } from './action';
import { APIRoute, AuthorizationStatus } from '../const';
import { adaptFilmsToClient, adaptFilmToClient, adaptReviewsToClient } from '../services/adaptors';
import { ToastIDs, MAX_SIMILAR_FILMS_COUNT, ResponseCode } from '../const';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({ data }) => dispatch(loadFilms(adaptFilmsToClient(data))))
    .catch((error) => toast(error.message, {
      toastId: ToastIDs.DATA_GET_ERROR,
    }))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({ data }) => dispatch(loadPromoFilm(adaptFilmToClient(data))))
    .catch((error) => toast(error.message, {
      toastId: ToastIDs.DATA_GET_ERROR,
    }))
);

export const fetchFavoriteFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_FILMS)
    .then(({ data }) => dispatch(loadFavoriteFilms(adaptFilmsToClient(data))))
    .catch((error) => toast(error.message))
);

export const checkAuth = (isInitial) => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({ data }) => dispatch(requireAuthorization(AuthorizationStatus.AUTH, data)))
    .catch((error) => {
      if (!isInitial) {
        toast(error.message);
      }
    })
);

export const login = (authData) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { ...authData })
    .then(({ data }) => {
      localStorage.setItem('token', data.token);
      return data;
    })
    .then((data) => dispatch(requireAuthorization(AuthorizationStatus.AUTH, data)))
    .catch((error) => toast(error.message))
);

export const systemLogout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logout()))
    .catch((error) => toast(error.message))
);

export const fetchFilmInfo = (filmId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${filmId}`)
    .then(({ data }) => dispatch(loadFilm(adaptFilmToClient(data))))
    .catch((error) => {
      if (error.response.status === ResponseCode.NOT_FOUND) {
        dispatch(setIsLoaded());
        return;
      }
      toast(error.message);
    })
);

export const fetchSimilarFilms = (filmId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${filmId}${APIRoute.SIMILAR_FILMS}`)
    .then(({ data }) => dispatch(loadSimilarFilms(adaptFilmsToClient(data)
      .filter((film) => film.id !== +filmId)
      .slice(0, MAX_SIMILAR_FILMS_COUNT))))
    .catch((error) => {
      toast(error.message);
    })
);

export const fetchReviews = (filmId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${filmId}`)
    .then(({ data }) => dispatch(loadReviews(adaptReviewsToClient(data))))
    .catch((error) => {
      toast(error.message);
    })
);

export const postComment = (filmId, comment, onSuccess) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${filmId}`, { ...comment })
    .then(() => dispatch(setCommentIsSending(false)))
    .then(() => onSuccess())
    .catch((error) => {
      dispatch(setCommentIsSending(false));
      toast(error.message);
    })
);

export const updateIsFavoriteStatus = (filmId, isCurrent, isPromo, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${filmId}/${status}`)
    .then(() => {
      isCurrent && dispatch(updateFilm());
      isPromo && dispatch(updatePromoFilm());
    })
    .catch((error) => {
      toast(error.message);
    })
);


