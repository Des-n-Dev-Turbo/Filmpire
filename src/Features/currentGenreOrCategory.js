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
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;
