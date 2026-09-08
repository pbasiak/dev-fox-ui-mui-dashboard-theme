import type { PaletteMode } from '@mui/material';

export const themePresets = [
  {
    id: 'devfox',
    name: 'DevFox',
    description: 'Warm, focused, and welcoming.',
    colors: ['#af4310', '#f7f8fa', '#232529'],
  },
  {
    id: 'appTheme',
    name: 'App',
    description: 'Confident blue. A fresh take on the original.',
    colors: ['#245dcc', '#edf3fc', '#152642'],
  },
  {
    id: 'shadTheme',
    name: 'Shad',
    description: 'Quiet neutrals and precise, minimal details.',
    colors: ['#27272a', '#f4f4f5', '#a1a1aa'],
  },
  {
    id: 'cyberpunkTheme',
    name: 'Cyberpunk',
    description: 'Coral, electric cyan, and a futuristic edge.',
    colors: ['#d33142', '#16d9dc', '#171420'],
  },
] as const;
export type ThemeId = (typeof themePresets)[number]['id'];

export function presetTokens(id: ThemeId, mode: PaletteMode) {
  const dark = mode === 'dark';
  switch (id) {
    case 'appTheme':
      return {
        accent: dark ? '#88b5ff' : '#245dcc',
        onAccent: dark ? '#10264a' : '#fff',
        secondary: dark ? '#c8adff' : '#7544ae',
        canvas: dark ? '#101923' : '#f4f7fc',
        paper: dark ? '#172330' : '#fff',
        text: dark ? '#eaf1fc' : '#19283d',
        muted: dark ? '#a6b6cb' : '#576980',
        border: dark ? '#314357' : '#dce5f0',
        radius: 14,
      };
    case 'shadTheme':
      return {
        accent: dark ? '#fafafa' : '#27272a',
        onAccent: dark ? '#18181b' : '#fff',
        secondary: dark ? '#c4c4cc' : '#52525b',
        canvas: dark ? '#101012' : '#fafafa',
        paper: dark ? '#19191c' : '#fff',
        text: dark ? '#fafafa' : '#18181b',
        muted: dark ? '#b0b0ba' : '#66666f',
        border: dark ? '#38383f' : '#dedee3',
        radius: 8,
      };
    case 'cyberpunkTheme':
      return {
        accent: dark ? '#ff7f85' : '#b82237',
        onAccent: dark ? '#2b0d15' : '#fff',
        secondary: dark ? '#46e5e3' : '#007679',
        canvas: dark ? '#100e18' : '#f6f2f5',
        paper: dark ? '#1c1727' : '#fffcfe',
        text: dark ? '#f4edf9' : '#2d1935',
        muted: dark ? '#bfb0cf' : '#75617e',
        border: dark ? '#503347' : '#dec9d6',
        radius: 4,
      };
    default:
      return {
        accent: dark ? '#f5a06b' : '#af4310',
        onAccent: dark ? '#351709' : '#fff',
        secondary: dark ? '#c7bab0' : '#655951',
        canvas: dark ? '#171819' : '#f8f9fb',
        paper: dark ? '#212224' : '#fff',
        text: dark ? '#f4f2ef' : '#232529',
        muted: dark ? '#b0ada9' : '#666d77',
        border: dark ? '#3b3b3b' : '#e7e8eb',
        radius: 12,
      };
  }
}
