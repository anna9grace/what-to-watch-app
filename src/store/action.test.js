import {
  loadFilms,
  loadPromoFilm,
  loadFavoriteFilms,
  loadFilm,
  loadReviews,
  loadSimilarFilms,
  setIsLoaded,
  setCommentIsSending,
  changeActiveGenre,
  resetActiveGenre,
  getFilmsList,
  getFilmsRenderedCount,
  resetFilmsRenderedCount,
  requireAuthorization,
  logout,
  updateFilm,
  clearFilm,
  updatePromoFilm,
  ActionType
} from './action';

import { AuthorizationStatus } from '../const';

describe('Actions', () => {
  it('action creator for loading films returns correct action', () => {
    const data = [{id: 1}, {id: 2}, {id: 3}];

    const expectedAction = {
      type: ActionType.LOAD_FILMS,
      payload: data,
    };

    expect(loadFilms(data)).toEqual(expectedAction);
  });


  it('action creator for loading promo film returns correct action', () => {
    const data = {id: 1, name: 'name'};

    const expectedAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: data,
    };

    expect(loadPromoFilm(data)).toEqual(expectedAction);
  });


  it('action creator for loading favorite films returns correct action', () => {
    const data = [{id: 1}, {id: 2}, {id: 3}];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: data,
    };

    expect(loadFavoriteFilms(data)).toEqual(expectedAction);
  });


  it('action creator for loading film returns correct action', () => {
    const data = {id: 1, name: 'name'};

    const expectedAction = {
      type: ActionType.LOAD_FILM,
      payload: data,
    };

    expect(loadFilm(data)).toEqual(expectedAction);
  });


  it('action creator for loading reviews returns correct action', () => {
    const data = [{id: 1, text: 'text1'}, {id: 2, text: 'text2'}];

    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: data,
    };

    expect(loadReviews(data)).toEqual(expectedAction);
  });


  it('action creator for loading similar films returns correct action', () => {
    const data = [{id: 1}, {id: 2}, {id: 3}];

    const expectedAction = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: data,
    };

    expect(loadSimilarFilms(data)).toEqual(expectedAction);
  });


  it('action creator for marking data as loaded returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_IS_LOADED,
    };

    expect(setIsLoaded()).toEqual(expectedAction);
  });


  it('action creator for marking comment as sending returns correct action', () => {
    const isSending = true;

    const expectedAction = {
      type: ActionType.SET_IS_SENDING,
      payload: true,
    };

    expect(setCommentIsSending(isSending)).toEqual(expectedAction);
  });


  it('action creator for marking comment as not sending returns correct action', () => {
    const isSending = false;

    const expectedAction = {
      type: ActionType.SET_IS_SENDING,
      payload: false,
    };

    expect(setCommentIsSending(isSending)).toEqual(expectedAction);
  });


  it('action creator for changing active genre returns correct action', () => {
    const data = 'drama';

    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: data,
    };

    expect(changeActiveGenre(data)).toEqual(expectedAction);
  });


  it('action creator for reseting active genre returns correct action', () => {
    const expectedAction = {
      type: ActionType.RESET_ACTIVE_GENRE,
    };

    expect(resetActiveGenre()).toEqual(expectedAction);
  });


  it('action creator for getting filtered films list returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_FILMS_LIST,
    };

    expect(getFilmsList()).toEqual(expectedAction);
  });


  it('action creator for counting rendered films returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_FILMS_RENDERED_COUNT,
    };

    expect(getFilmsRenderedCount()).toEqual(expectedAction);
  });


  it('action creator for reseting rendered films count returns correct action', () => {
    const expectedAction = {
      type: ActionType.RESET_FILMS_RENDERED_COUNT,
    };

    expect(resetFilmsRenderedCount()).toEqual(expectedAction);
  });


  it('action creator for updating film returns correct action', () => {
    const expectedAction = {
      type: ActionType.UPDATE_FILM,
    };

    expect(updateFilm()).toEqual(expectedAction);
  });


  it('action creator for clearing current film returns correct action', () => {
    const expectedAction = {
      type: ActionType.CLEAR_FILM,
    };

    expect(clearFilm()).toEqual(expectedAction);
  });


  it('action creator for updating promo film returns correct action', () => {
    const expectedAction = {
      type: ActionType.UPDATE_PROMO_FILM,
    };

    expect(updatePromoFilm()).toEqual(expectedAction);
  });


  it('action creator for logging out returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });


  it('action creator for requiring authorization with AUTH returns correct action', () => {
    const userData = {
      login: 'a@gmail.ru',
      password: 'qwerty',
    };

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        authStatus: AuthorizationStatus.AUTH,
        authInfo: userData,
      },
    };

    expect(requireAuthorization(AuthorizationStatus.AUTH, userData)).toEqual(expectedAction);
  });


  it('action creator for requiring authorization with NO_AUTH and no data returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        authStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      },
    };

    expect(requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual(expectedAction);
  });
});
