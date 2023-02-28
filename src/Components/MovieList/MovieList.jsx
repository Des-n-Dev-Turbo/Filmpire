import React from 'react';

import Movie from '../Movie/Movie';

import { MoviesContainer } from './styles';

const MovieList = ({ movies, numberOfMovies }) => (
  <MoviesContainer container>
    {movies.results.slice(0, numberOfMovies).map((movie, i) => (
      <Movie key={i} movie={movie} i={i} />
    ))}
  </MoviesContainer>
);

export default MovieList;
