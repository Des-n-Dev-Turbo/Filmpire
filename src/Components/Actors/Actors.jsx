import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import MovieList from '../MovieList/MovieList';
import Pagination from '../Pagination/Pagination';

import { useGetActorDetailsQuery, useGetMoviesByActorQuery } from '../../Services/TMDB';

import { PosterImage } from './styles';

const Actors = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data: actor, error, isFetching } = useGetActorDetailsQuery(id);
  const { data: movies } = useGetMoviesByActorQuery({ id, page });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <PosterImage src={`https://image.tmdb.org/t/p/w780/${actor?.profile_path}`} alt={actor?.name} />
        </Grid>
        <Grid item lg={7} xl={8} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant="h2" gutterBottom>
            {actor?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(actor?.birthday).toDateString()}
          </Typography>
          <Typography variant="body1" gutterBottom align="justify" paragraph>
            {actor?.biography || 'Sorry no biography yet.....'}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${actor?.imdb_id}`}
            >
              IMDB
            </Button>
            <Button onClick={() => navigate(-1)} startIcon={<ArrowBack />} color="primary">
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">
          Movies
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination currentPage={page} setPage={setPage} totalPages={movies?.total_pages} />
      </Box>
    </>
  );
};

export default Actors;
