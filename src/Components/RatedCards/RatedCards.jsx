import React from 'react';
import { Typography, Box } from '@mui/material';

import Movie from '../Movie/Movie';

import { ContainerBox } from './styles';

const RatedCards = ({ title, data }) => (
  <Box>
    <Typography variant="h5" gutterBottom>
      {title}
    </Typography>
    <ContainerBox display="flex" flexWrap="wrap">
      {data?.results?.map((movie, i) => (
        <Movie key={movie.id} movie={movie} i={i} />
      ))}
    </ContainerBox>
  </Box>
);

export default RatedCards;
