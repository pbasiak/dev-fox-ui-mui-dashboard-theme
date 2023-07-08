import { ThemeProvider } from '@mui/material';
import { AppTheme } from '../../../theme/theme';
import { ReactNode } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const StorybookContainer = ({children}: {children: ReactNode}) => {
  const theme = AppTheme('light');
  return (<ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>)
}