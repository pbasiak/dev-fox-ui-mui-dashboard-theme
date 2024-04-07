import { Theme } from '@mui/material';
import { appTheme } from './app-theme/appTheme.ts';
import { shadTheme } from './shad-theme/shadTheme.ts';

const themeMap: { [key: string]: (mode: 'light' | 'dark') => Theme } = {
  appTheme,
  shadTheme,
};

export const getThemeByName = (theme: string, mode: 'light' | 'dark') => {
  return themeMap[theme](mode);
};
