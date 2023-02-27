import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Modal,
  Rating,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  ArrowBack,
  Favorite,
  FavoriteBorderOutlined,
  Language,
  Movie as MovieIcon,
  PlusOne,
  Remove,
  Theaters,
} from '@mui/icons-material';

import { selectGenreOrCategory } from '../../Features/currentGenreOrCategory';
import { useGetMovieQuery } from '../../Services/TMDB';

import genreIcons from '../../assets/genres';
import { CustomLink, GenreImage, GenresContainerGrid, PosterImage, SpaceAroundGrid } from './styles';

const MovieInformation = () => {
  const { id } = useParams();
  const { data, error, isFetching } = useGetMovieQuery(id);
  const dispatch = useDispatch();

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
        <Link to="/">Something has gone wrong - Go back!</Link>
      </Box>
    );
  }

  return (
    <SpaceAroundGrid container>
      <Grid item sm={12} lg={4}>
        <PosterImage src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data?.title} />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.title} ({data.release_date.split('-')[0]})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}
        </Typography>
        <SpaceAroundGrid item>
          <Box display="flex" align="center">
            <Rating readOnly value={data.vote_average / 2} />
            <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '10px' }}>
              {data?.vote_average} / 10
            </Typography>
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            {data?.runtime}mins {data?.spoken_languages.length > 0 ? `/ ${data?.spoken_languages[0].name}` : ''}
          </Typography>
        </SpaceAroundGrid>
        <GenresContainerGrid item>
          {data?.genres?.map((genre, i) => (
            <CustomLink key={genre.name + i} to="/" onClick={() => dispatch(selectGenreOrCategory(genre.id))}>
              <GenreImage src={genreIcons[genre.name.toLowerCase()]} height={30} />
              <Typography color="textPrimary" variant="subtitle1">
                {genre?.name}
              </Typography>
            </CustomLink>
          ))}
        </GenresContainerGrid>
      </Grid>
    </SpaceAroundGrid>
  );
};

export default MovieInformation;
