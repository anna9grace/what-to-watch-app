import {NameSpace} from '../root-reducer';

export const getFilms = (state) => state[NameSpace.DATA].films;
export const getActiveGenre = (state) => state[NameSpace.DATA].activeGenre;
export const getFilteredFilms = (state) => state[NameSpace.DATA].filteredFilms;
export const getFilmsCount = (state) => state[NameSpace.DATA].renderedFilmsCount;
export const getDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;

export const getFavoriteFilms = (state) => state[NameSpace.DATA].favoriteFilms;
export const getFavoriteDataStatus = (state) => state[NameSpace.DATA].isFavoriteDataLoaded;
export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
export const getPromoDataStatus = (state) => state[NameSpace.DATA].isPromoDataLoaded;

