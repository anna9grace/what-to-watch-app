import { filmData } from './film-data';

import { ActionType } from '../action';
import { mockFilm, mockFilms, mockReviews } from '../../utils/mock';

const initialState = {
  currentFilm: null,
  reviews: [],
  similarFilms: null,
  isFilmDataLoaded: false,
  isCommentSending: false,
};

const film = mockFilm;
const films = mockFilms;
const comments = mockReviews;

describe('Reducer: filmData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmData(undefined, {}))
      .toEqual(initialState);
  });


  it('should update current film by film load', () => {
    const state = initialState;
    const loadFilmAction = {
      type: ActionType.LOAD_FILM,
      payload: film,
    };

    expect(filmData(state, loadFilmAction))
      .toEqual({
        ...state,
        currentFilm: film,
        isFilmDataLoaded: true,
      });
  });


  it('should update current film by adding / removing it from favorites', () => {
    const state = {
      ...initialState,
      currentFilm: film,
    };

    const updateFilmAction = {
      type: ActionType.UPDATE_FILM,
    };

    expect(filmData(state, updateFilmAction))
      .toEqual({
        ...state,
        currentFilm: {
          ...state.currentFilm,
          isFavorite: true,
        },
      });
  });


  it('should update state by clearing film data', () => {
    const state = {
      ...initialState,
      currentFilm: film,
      similarFilms: films,
      isFilmDataLoaded: true,
      reviews: comments,
    };
    const clearFilmAction = {
      type: ActionType.CLEAR_FILM,
    };

    expect(filmData(state, clearFilmAction))
      .toEqual({
        ...state,
        currentFilm: null,
        similarFilms: null,
        isFilmDataLoaded: false,
        reviews: [],
      });
  });


  it('should update similar films by similar films load', () => {
    const state = initialState;
    const loadSimilarFilmsAction = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: films,
    };

    expect(filmData(state, loadSimilarFilmsAction))
      .toEqual({
        ...state,
        similarFilms: films,
      });
  });


  it('should update reviews films by reviews load', () => {
    const state = initialState;
    const loadReviewsAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: comments,
    };

    expect(filmData(state, loadReviewsAction))
      .toEqual({
        ...state,
        reviews: comments,
      });
  });


  it('should mark data as loaded by film data load', () => {
    const state = initialState;
    const setIsLoadedAction = {
      type: ActionType.SET_IS_LOADED,
    };

    expect(filmData(state, setIsLoadedAction))
      .toEqual({
        ...state,
        isFilmDataLoaded: true,
      });
  });


  it('should mark comment as sending when sending process started', () => {
    const state = initialState;
    const setIsSendingAction = {
      type: ActionType.SET_IS_SENDING,
      payload: true,
    };

    expect(filmData(state, setIsSendingAction))
      .toEqual({
        ...state,
        isCommentSending: true,
      });
  });
});
