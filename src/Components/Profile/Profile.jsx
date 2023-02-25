import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { userSelector } from '../../Features/auth';

const favoriteMovies = [];

const Profile = () => {
  const { isAuthenticated, user } = useSelector(userSelector);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();

    navigate('/', {
      replace: true,
    });
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography variant="h5">Add favourites or watchlist some movies to see them here!</Typography>
      ) : (
        <Box>FAVOURITE MOVIES</Box>
      )}
    </Box>
  );
};

export default Profile;
