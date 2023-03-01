import React from 'react';

import Movie from '../Movie/Movie';

import { MoviesContainer } from './styles';

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
  const startFrom = excludeFirst ? 1 : 0;
  return (
    <MoviesContainer container>
      {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </MoviesContainer>
  );
};

export default MovieList;
