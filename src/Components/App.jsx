import React from 'react';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import router from '../Router';
import store from '../Store';
import ToggleColorMode from '../Utils/ToggleColorMode';

import { RootComponent } from './styles';

const App = () => (
  <Provider store={store}>
    <ToggleColorMode>
      <RootComponent>
        <CssBaseline />
        <RouterProvider router={router} />
      </RootComponent>
    </ToggleColorMode>
  </Provider>
);

export default App;
