import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './mui-theme';

export interface LibThemeProviderProps {
  children: React.ReactNode;
  mode?: 'light' | 'dark';
}

export const LibThemeProvider: React.FC<LibThemeProviderProps> = ({ children, mode = 'light' }) => {
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
