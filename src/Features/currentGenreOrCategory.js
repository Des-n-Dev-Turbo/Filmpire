/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  genreIdOrCategoryName: '',
  page: 1,
  searchQuery: '',
};

const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: INITIAL_STATE,
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
      state.genreIdOrCategoryName = '';
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;
