import {NameSpace} from '../root-reducer';

export const getCurrentFilm = (state) => state[NameSpace.FILM].currentFilm;
export const getReviews = (state) => state[NameSpace.FILM].reviews;
export const getSimilarFilms = (state) => state[NameSpace.FILM].similarFilms;
export const getFilmDataStatus = (state) => state[NameSpace.FILM].isFilmDataLoaded;
export const getCommentSendingStatus = (state) => state[NameSpace.FILM].isCommentSending;
