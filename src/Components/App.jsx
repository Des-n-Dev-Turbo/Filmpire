import React from 'react';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';

import useStyles from './styles';
import router from '../Router';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
