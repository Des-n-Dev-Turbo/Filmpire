import { configureStore } from '@reduxjs/toolkit';

import currentGenreOrCategoryReducer from '../Features/currentGenreOrCategory';
import userReducer from '../Features/auth';
import { tmdbApi } from '../Services/TMDB';

const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: currentGenreOrCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;
