import React from 'react';

import Movie from '../Movie/Movie';

import { MoviesContainer } from './styles';

const MovieList = ({ movies }) => {
  console.log('MovieList');

  return (
    <MoviesContainer container>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </MoviesContainer>
  );
};

export default MovieList;