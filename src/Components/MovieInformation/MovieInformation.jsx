/* eslint-disable comma-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Box, Button, ButtonGroup, CircularProgress, Grid, Rating, Typography, useMediaQuery } from '@mui/material';
import axios from 'axios';
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

import MovieList from '../MovieList/MovieList';

import { selectGenreOrCategory } from '../../Features/currentGenreOrCategory';
import { useGetListQuery, useGetMovieQuery, useGetRecommendationQuery } from '../../Services/TMDB';
import { userSelector } from '../../Features/auth';

import genreIcons from '../../assets/genres';
import {
  ButtonsContainer,
  ButtonsContainerGrid,
  CastImage,
  CustomLink,
  CustomModal,
  GenreImage,
  GenresContainerGrid,
  PosterImage,
  posterImageGridStyle,
  SpaceAroundGrid,
  Videos,
} from './styles';

const MovieInformation = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const { user } = useSelector(userSelector);
  const dispatch = useDispatch();
  const [isMovieFavorited, setIsMovieFavorited] = useState(false);
  const [isMovieWatchlisted, setIsMovieWatchlisted] = useState(false);

  const sessionId = localStorage.getItem('session_id');

  const { data, error, isFetching } = useGetMovieQuery(id);
  const { data: recommendations } = useGetRecommendationQuery({
    list: 'recommendations',
    movieId: id,
  });
  const { data: favoriteMovies } = useGetListQuery({
    listName: 'favorite/movies',
    accountId: user.id,
    sessionId,
    page: 1,
  });
  const { data: watchlistMovies } = useGetListQuery({
    listName: 'watchlist/movies',
    accountId: user.id,
    sessionId,
    page: 1,
  });

  useEffect(() => {
    setIsMovieFavorited(!!favoriteMovies?.results?.find((movie) => movie?.id === data?.id));
  }, [favoriteMovies, data]);

  useEffect(() => {
    setIsMovieWatchlisted(!!watchlistMovies?.results?.find((movie) => movie?.id === data?.id));
  }, [watchlistMovies, data]);

  const addToFavorites = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${user.id}/favorite?api_key=${
        import.meta.env.VITE_REACT_APP_TMDB_KEY
      }&session_id=${sessionId}`,
      {
        media_type: 'movie',
        media_id: id,
        favorite: !isMovieFavorited,
      }
    );
    setIsMovieFavorited((prevState) => !prevState);
  };

  const addToWatchlist = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${user.id}/watchlist?api_key=${
        import.meta.env.VITE_REACT_APP_TMDB_KEY
      }&session_id=${localStorage.getItem('session_id')}`,
      {
        media_type: 'movie',
        media_id: id,
        watchlist: !isMovieWatchlisted,
      }
    );
    setIsMovieWatchlisted((prevState) => !prevState);
  };

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
      <Grid item sm={12} lg={4} sx={posterImageGridStyle}>
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
            {data?.runtime} mins | Language: {data?.spoken_languages[0].name}
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
        <Typography variant="h5" gutterBottom sx={{ marginTop: '10px' }}>
          Overview
        </Typography>
        <Typography sx={{ marginBottom: '2rem' }}>{data?.overview}</Typography>
        <Typography variant="h5" gutterBottom>
          Top Cast
        </Typography>
        <Grid item container spacing={2}>
          {
            // eslint-disable-next-line operator-linebreak
            data &&
              data?.credits?.cast
                ?.map(
                  (character, i) =>
                    // eslint-disable-next-line implicit-arrow-linebreak
                    character.profile_path && (
                      <Grid
                        key={i}
                        item
                        xs={4}
                        md={2}
                        component={Link}
                        to={`/actors/${character.id}`}
                        sx={{ textDecoration: 'none' }}
                      >
                        <CastImage
                          src={`http://image.tmdb.org/t/p/w500/${character.profile_path}`}
                          alt={character.name}
                        />
                        <Typography color="textPrimary">{character?.name}</Typography>
                        <Typography color="textSecondary">{character?.character.split('/')[0]}</Typography>
                      </Grid>
                      // eslint-disable-next-line comma-dangle
                    )
                )
                .slice(0, 6)
          }
        </Grid>
        <Grid item container sx={{ marginTop: '2rem' }}>
          <ButtonsContainer>
            <ButtonsContainerGrid item xs={12} sm={6}>
              <ButtonGroup size="small" variant="outlined">
                <Button target="_blank" rel="noopener noreferer" href={data?.homepage} endIcon={<Language />}>
                  Website
                </Button>
                <Button
                  target="_blank"
                  rel="noopener noreferer"
                  href={`https://www.imdb.com/title/${data?.imdb_id}`}
                  endIcon={<MovieIcon />}
                >
                  IMDB
                </Button>
                <Button onClick={() => setOpen(true)} href="#" endIcon={<Theaters />}>
                  Trailer
                </Button>
              </ButtonGroup>
            </ButtonsContainerGrid>
            <ButtonsContainerGrid item xs={12} sm={6}>
              <ButtonGroup size="medium" variant="outlined">
                <Button onClick={addToFavorites} endIcon={isMovieFavorited ? <FavoriteBorderOutlined /> : <Favorite />}>
                  {isMovieFavorited ? 'Unfavorite' : 'Favorite'}
                </Button>
                <Button onClick={addToWatchlist} endIcon={isMovieWatchlisted ? <Remove /> : <PlusOne />}>
                  Watchlist
                </Button>
                <Button endIcon={<ArrowBack />} sx={{ borderColor: 'primary.main' }}>
                  <Typography
                    component={Link}
                    to="/"
                    color="inherit"
                    variant="subtitle1"
                    sx={{ textDecoration: 'none' }}
                  >
                    Back
                  </Typography>
                </Button>
              </ButtonGroup>
            </ButtonsContainerGrid>
          </ButtonsContainer>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: '5rem', width: '100%' }}>
        <Typography variant="h3" gutterBottom align="center">
          You might also like
        </Typography>
        {recommendations ? (
          <MovieList movies={recommendations} numberOfMovies={12} />
        ) : (
          <Box>Sorry nothing was found!</Box>
        )}
      </Box>
      <CustomModal closeAfterTransition open={open} onClose={() => setOpen(false)}>
        {data?.videos?.results?.length > 0 && (
          <Videos
            autoPlay
            title="Trailer"
            src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
            allow="autoplay"
          />
        )}
      </CustomModal>
    </SpaceAroundGrid>
  );
};

export default MovieInformation;
