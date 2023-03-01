/* eslint-disable comma-dangle */
import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext({
  mode: 'light',
  setMode: () => {},
  toggleColorMode: () => {},
});

const ToggleColorMode = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      createTheme({
        components: {
          MuiDrawer: {
            styleOverrides: {
              paper: {
                width: 240,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                position: 'relative',
              },
            },
          },
          MuiCardContent: {
            styleOverrides: {
              root: {
                position: 'relative',
                backgroundColor: 'transparent',
              },
            },
          },
        },
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const contextValue = useMemo(() => ({ mode, setMode, toggleColorMode }), [mode]);

  return (
    <ColorModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
