import { ComponentsPropsList, Theme as MuiTheme } from '@mui/material';
import { appTheme } from './app-theme/appTheme.ts';
import { shadTheme } from './shad-theme/shadTheme.ts';
import { cyberpunkTheme } from './cyberpunk-theme/cyberpunkTheme.ts';

import { ComponentsOverrides } from '@mui/material/styles';

type Theme = Omit<MuiTheme, 'components'>;

declare module '@mui/material/styles' {
  interface ComponentNameToClassKey {
    FoxUiLogo: 'text' | 'imgContainer' | 'img';
    FoxUiNavigationItem: 'button';
  }

  interface Components {
    FoxUiLogo?: {
      styleOverrides?: ComponentsOverrides<Theme>['FoxUiLogo'];
    };
    FoxUiNavigationItem?: {
      defaultProps?: ComponentsPropsList['MuiListItemButton'];
      styleOverrides?: ComponentsOverrides<Theme>['FoxUiNavigationItem'];
      variants?: 'active' | 'nested';
    };
  }
}

const themeMap: { [key: string]: (mode: 'light' | 'dark') => Theme } = {
  appTheme,
  shadTheme,
  cyberpunkTheme,
};

export const getThemeByName = (theme: string, mode: 'light' | 'dark') => {
  return themeMap[theme](mode);
};
