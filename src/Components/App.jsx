import React from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { RootComponent } from './styles';
import router from '../Router';
import store from '../Store';

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 240,
        },
      },
    },
  },
});

const App = () => {
  console.log('App');

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RootComponent>
          <CssBaseline />
          <RouterProvider router={router} />
        </RootComponent>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
