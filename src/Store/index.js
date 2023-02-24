import { configureStore } from '@reduxjs/toolkit';

import currentGenreOrCategoryReducer from '../Features/currentGenreOrCategory';
import { tmdbApi } from '../Services/TMDB';

const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: currentGenreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;
