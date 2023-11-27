import {createReducer} from '@reduxjs/toolkit';

import { loadFilm, loadReviews, loadSimilarFilms, setIsLoaded, setCommentIsSending, updateFilm, clearFilm } from '../action';

const initialState = {
  currentFilm: null,
  reviews: [],
  similarFilms: null,
  isFilmDataLoaded: false,
  isCommentSending: false,
};

const filmData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilm, (state, action) => {
      state.currentFilm = action.payload;
      state.isFilmDataLoaded = true;
    })
    .addCase(updateFilm, (state) => {
      state.currentFilm = {...state.currentFilm, isFavorite: !state.currentFilm.isFavorite};
    })
    .addCase(clearFilm, (state) => {
      state.currentFilm = null;
      state.similarFilms = null;
      state.isFilmDataLoaded = false;
      state.reviews = [];
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setIsLoaded, (state) => {
      state.isFilmDataLoaded = true;
    })
    .addCase(setCommentIsSending, (state, action) => {
      state.isCommentSending = action.payload;
    });
});

export {filmData};
