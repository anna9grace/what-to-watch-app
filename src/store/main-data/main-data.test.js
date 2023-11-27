import { mainData } from './main-data';
import { INITIAL_GENRE, MAX_FILMS_COUNT } from '../../const';
import { ActionType } from '../action';
import { mockFilms } from '../../utils/mock';

const initialState = {
  activeGenre: INITIAL_GENRE,
  films: [],
  filteredFilms: [],
  renderedFilmsCount: MAX_FILMS_COUNT,
  isDataLoaded: false,
  favoriteFilms: [],
  isFavoriteDataLoaded: false,
  promoFilm: {},
  isPromoDataLoaded: false,
};

const films = mockFilms;

describe('Reducer: mainData', () => {
  it('without additional parameters should return initial state', () => {
    expect(mainData(undefined, {}))
      .toEqual(initialState);
  });


  it('should update state by load films', () => {
    const state = initialState;
    const loadFilmsAction = {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };

    expect(mainData(state, loadFilmsAction))
      .toEqual({
        ...state,
        films: films,
        filteredFilms: films,
        isFavoriteDataLoaded: true,
        isDataLoaded: true,
      });
  });


  it('should update active genre by genre change', () => {
    const state = initialState;
    const changeActiveGenreAction = {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: 'Drama',
    };

    expect(mainData(state, changeActiveGenreAction))
      .toEqual({
        ...state,
        activeGenre: 'Drama',
      });
  });


  it('should change active genre to default value by genre reset', () => {
    const state = initialState;
    const resetActiveGenreAction = {
      type: ActionType.INITIAL_GENRE,
    };

    expect(mainData(state, resetActiveGenreAction))
      .toEqual({
        ...state,
        activeGenre: INITIAL_GENRE,
      });
  });


  it('should get films list filtered by active genre', () => {
    const state = {
      ...initialState,
      activeGenre: 'Action',
      films: films,
    };

    const getFilmsListAction = {
      type: ActionType.GET_FILMS_LIST,
    };

    expect(mainData(state, getFilmsListAction))
      .toEqual({
        ...state,
        filteredFilms: [films[0], films[2]],
      });
  });


  it('should get all films if "all genres" chosen', () => {
    const state = {
      ...initialState,
      activeGenre: INITIAL_GENRE,
      films: films,
    };

    const getFilmsListAction = {
      type: ActionType.GET_FILMS_LIST,
    };

    expect(mainData(state, getFilmsListAction))
      .toEqual({
        ...state,
        filteredFilms: films,
      });
  });


  it('should get current count of rendered films when all films shown', () => {
    const state = {
      ...initialState,
      filteredFilms: [films[0], films[2]],
    };

    const getFilmsRenderedCountAction = {
      type: ActionType.GET_FILMS_RENDERED_COUNT,
    };

    expect(mainData(state, getFilmsRenderedCountAction))
      .toEqual({
        ...state,
        renderedFilmsCount: 2,
      });
  });


  it('should get current count of rendered films when not all films shown', () => {
    const state = {
      ...initialState,
      renderedFilmsCount: 0,
      filteredFilms: [...films, ...films, ...films, ...films],
    };

    const getFilmsRenderedCountAction = {
      type: ActionType.GET_FILMS_RENDERED_COUNT,
    };

    expect(mainData(state, getFilmsRenderedCountAction))
      .toEqual({
        ...state,
        renderedFilmsCount: 8,
      });
  });


  it('should reset count of rendered films', () => {
    const state = {
      ...initialState,
      renderedFilmsCount: 7,
    };

    const resetFilmsCountAction = {
      type: ActionType.RESET_FILMS_RENDERED_COUNT,
    };

    expect(mainData(state, resetFilmsCountAction))
      .toEqual({
        ...state,
        renderedFilmsCount: MAX_FILMS_COUNT,
      });
  });


  it('should update favorite films by loading favorite films', () => {
    const state = initialState;

    const getFavoriteFilmsAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films,
    };

    expect(mainData(state, getFavoriteFilmsAction))
      .toEqual({
        ...state,
        favoriteFilms: films,
        isFavoriteDataLoaded: true,
      });
  });


  it('should update promo film by loading promo film', () => {
    const state = initialState;

    const getPromoFilmAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: films[0],
    };

    expect(mainData(state, getPromoFilmAction))
      .toEqual({
        ...state,
        promoFilm: films[0],
        isPromoDataLoaded: true,
      });
  });


  it('should update promo film by adding or removing promo film from favorite', () => {
    const state = {
      ...initialState,
      promoFilm: films[0],
    };

    const updatePromoFilmAction = {
      type: ActionType.UPDATE_PROMO_FILM,
    };

    expect(mainData(state, updatePromoFilmAction))
      .toEqual({
        ...state,
        promoFilm: {
          ...state.promoFilm,
          isFavorite: true,
        },
      });
  });
});
