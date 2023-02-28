import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = import.meta.env.VITE_REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    //* Get Movies by [Type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        //* Get Movies by Search
        if (searchQuery) {
          return `search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }
        //* Get Movies by Category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }
        //* Get Movies by Id
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }
        //* Get Popular Movies
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    //* Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    //* Get Movie by [id]
    getMovie: builder.query({
      query: (id) => `movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),
    //* Get User Specific List
    getRecommendation: builder.query({
      query: ({ movieId, list }) => `movie/${movieId}/${list}?api_key=${tmdbApiKey}`,
    }),
    //* Get Actor details by [id]
    getActorDetails: builder.query({
      query: (actorId) => `person/${actorId}?api_key=${tmdbApiKey}`,
    }),
    //* Get Movies by [Actor id]
    getMoviesByActor: builder.query({
      query: ({ id, page }) => `discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
    }),
    //* Get user specific lists
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        `account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
    }),
  }),
});

export const {
  useGetActorDetailsQuery,
  useGetListQuery,
  useGetMovieQuery,
  useGetMoviesByActorQuery,
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetRecommendationQuery,
} = tmdbApi;
