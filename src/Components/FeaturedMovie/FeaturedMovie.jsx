import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CustomCard, CustomCardContent, CustomCardMedia, FeaturedCardContainer } from './styles';

const FeaturedMovie = ({ movie }) => {
  if (!movie) return null;

  return (
    <FeaturedCardContainer component={Link} to={`/movie/${movie.id}`}>
      <CustomCard>
        <CustomCardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          title={movie.title}
        />
        <Box padding="20px">
          <CustomCardContent>
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="body2">{movie.overview}</Typography>
          </CustomCardContent>
        </Box>
      </CustomCard>
    </FeaturedCardContainer>
  );
};

export default FeaturedMovie;
