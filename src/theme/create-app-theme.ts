import { alpha, createTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';
import { presetTokens } from './presets';
import type { ThemeId } from './presets';

/** The only place to change the template's palette, typography, and component defaults. */
export function createAppTheme(mode: PaletteMode = 'light', preset: ThemeId = 'devfox') {
  const dark = mode === 'dark';
  const tokens = presetTokens(preset, mode);
  const { accent, border } = tokens;
  const cyberpunk = preset === 'cyberpunkTheme';
  return createTheme({
    palette: {
      mode,
      primary: { main: accent, contrastText: tokens.onAccent },
      secondary: { main: tokens.secondary },
      background: { default: tokens.canvas, paper: tokens.paper },
      text: { primary: tokens.text, secondary: tokens.muted },
      divider: border,
      success: { main: dark ? '#5dc99d' : '#1a6949' },
      warning: { main: dark ? '#e9b85c' : '#895b12' },
      error: { main: dark ? '#f38181' : '#bd363c' },
      info: { main: dark ? '#9aafff' : '#4862b5' },
    },
    shape: { borderRadius: tokens.radius },
    typography: {
      fontFamily: '"Inter Variable", sans-serif',
      fontSize: 13,
      h1: {
        fontFamily: cyberpunk ? '"Rajdhani", sans-serif' : undefined,
        fontSize: '1.9rem',
        fontWeight: 650,
        letterSpacing: '-1.1px',
        lineHeight: 1.3,
      },
      h2: { fontSize: '1.5rem', fontWeight: 650, letterSpacing: '-0.6px' },
      h3: { fontSize: '1.2rem', fontWeight: 650, letterSpacing: '-0.4px' },
      h4: { fontSize: '1.05rem', fontWeight: 600 },
      h5: { fontSize: '1rem', fontWeight: 600 },
      h6: { fontSize: '.9rem', fontWeight: 600 },
      subtitle1: { fontWeight: 600 },
      subtitle2: { fontWeight: 600, fontSize: '.8rem' },
      body1: { fontSize: '.875rem', lineHeight: 1.7 },
      body2: { fontSize: '.8rem', lineHeight: 1.65 },
      button: { textTransform: 'none', fontWeight: 550, fontSize: '.8rem' },
      overline: { fontSize: '.62rem', fontWeight: 650, letterSpacing: '1.4px' },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            colorScheme: mode,
            ...(cyberpunk
              ? {
                  backgroundImage: `linear-gradient(${alpha(tokens.secondary, 0.035)} 1px, transparent 1px), linear-gradient(90deg, ${alpha(tokens.secondary, 0.035)} 1px, transparent 1px)`,
                  backgroundSize: '32px 32px',
                }
              : {}),
          },
          ':focus-visible': { outline: `3px solid ${accent}`, outlineOffset: '3px' },
          'button, a': { WebkitTapHighlightColor: 'transparent' },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: Math.min(tokens.radius, 8), padding: '9px 15px', whiteSpace: 'nowrap' },
          outlined: { borderColor: border, color: tokens.text, backgroundColor: tokens.paper },
          sizeSmall: { padding: '5px 11px' },
        },
      },
      MuiPaper: {
        defaultProps: { elevation: 0 },
        styleOverrides: { root: { backgroundImage: 'none' }, outlined: { borderColor: border } },
      },
      MuiCard: { defaultProps: { variant: 'outlined' }, styleOverrides: { root: { borderRadius: tokens.radius } } },
      MuiTextField: { defaultProps: { size: 'small', variant: 'outlined' } },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: Math.min(tokens.radius, 8),
            fontSize: '.825rem',
            '& fieldset': { borderColor: alpha(tokens.text, dark ? 0.45 : 0.5) },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: { borderColor: border, padding: '15px 20px', fontSize: '.8rem' },
          head: {
            color: tokens.muted,
            backgroundColor: alpha(tokens.muted, 0.04),
            fontSize: '.72rem',
            fontWeight: 500,
          },
        },
      },
      MuiChip: {
        defaultProps: { size: 'small' },
        styleOverrides: { root: { borderRadius: 6, fontWeight: 550, fontSize: '.68rem', height: 24 } },
      },
      MuiIconButton: { styleOverrides: { root: { borderRadius: Math.min(tokens.radius, 8) } } },
      MuiTabs: { styleOverrides: { root: { minHeight: 43 }, indicator: { height: 2 } } },
      MuiTab: {
        styleOverrides: {
          root: { minHeight: 43, minWidth: 0, padding: '10px 18px', fontWeight: 550, textTransform: 'none' },
        },
      },
      MuiDialog: { styleOverrides: { paper: { borderRadius: 16, padding: 4 } } },
      MuiTooltip: { defaultProps: { arrow: true } },
      MuiAvatar: {
        styleOverrides: {
          root: { fontSize: '.75rem', fontWeight: 600, backgroundColor: alpha(accent, 0.1), color: accent },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: { height: 5, borderRadius: 6, backgroundColor: alpha(accent, 0.1) },
          bar: { borderRadius: 6 },
        },
      },
    },
  });
}
