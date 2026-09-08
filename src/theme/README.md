# Theme system

One factory provides consistent component behavior. Preset tokens provide personality.

```tsx
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createAppTheme } from './theme/create-app-theme';
import '@fontsource-variable/inter';
import '@fontsource/rajdhani/600.css';
import '@fontsource/rajdhani/700.css';

const theme = createAppTheme('dark', 'cyberpunkTheme');

<ThemeProvider theme={theme}>
  <CssBaseline />
  <YourApp />
</ThemeProvider>;
```

The factory is independent of the application router and demo data. Copy `create-app-theme.ts` and `presets.ts` to use it in another app. Rajdhani is needed for the Cyberpunk heading treatment; Inter is the shared body font.

## Presets

- **`devfox`:** warm terracotta accents, balanced gray surfaces, and soft cards. Dark mode uses a lighter peach accent with dark button text.
- **`appTheme`:** the original blue direction, refreshed with cool surfaces, stronger hierarchy, and a soft violet secondary color. Dark mode uses blue-gray layers and bright blue accents.
- **`shadTheme`:** the original minimal, monochrome idea with distinct surfaces and tighter geometry. Primary actions invert between dark and light modes.
- **`cyberpunkTheme`:** the original coral/cyan identity, subtle technical grid, sharper cards, and Rajdhani headings. Dark mode uses deep plum surfaces with coral/cyan highlights. Light mode uses pale pink surfaces and deeper coral/teal accents to retain contrast.

Every preset supplies `accent`, `onAccent`, `secondary`, `canvas`, `paper`, `text`, `muted`, `border`, and `radius`. The theme factory adds the shared semantic colors, typography, focus treatment, and Material UI defaults.

## Customize a theme

1. Edit the light/dark values in `presetTokens()` in `presets.ts`.
2. Keep readable `text` and `muted` colors on both `canvas` and `paper`.
3. Check `accent` against both surfaces and `onAccent` against the accent fill.
4. Check tinted states too: selected navigation, avatars, chips, hover, and focus.
5. Run `npm test` and the browser theme tests after changes.

To add a preset, add its ID/name/description to `themePresets`, then add its token pair in `presetTokens()`. `ThemeId` is derived from the registry, and the appearance picker renders it automatically. Add it to the browser-test theme list as well.

Change component defaults in `create-app-theme.ts`, not in each feature. Use semantic tokens such as `text.secondary`, `background.paper`, `primary.main`, and `divider`. Decorative article art and project accent colors are intentionally content-specific.

## Preferences

`PreferencesContext` exposes:

```ts
{
  preferences: { themeId, mode, compact },
  updatePreferences: (partialPreferences) => void,
}
```

`App.tsx` persists preferences under `devfox:appearance`. `createAppTheme` is memoized so ordinary page updates do not recreate it. The header toggle changes mode; the appearance page selects the preset and density. Choosing an already selected mode does not toggle it accidentally.

The default is DevFox light. Change `defaultPreferences` in `preferences.tsx` to choose a different first-run theme. Returning users retain their saved selection until they reset appearance or clear demo storage.

## Contrast and motion

Unit tests check at least **4.5:1** for body text, secondary text, accent text, primary button labels, and status-chip text. Browser tests check actual rendered elements in all eight combinations, including backgrounds with tints. Theme changes should preserve those checks.

Chart animations are disabled, and CSS honors `prefers-reduced-motion`. Keyboard focus uses the active theme’s accent. Status labels use text as well as color. These choices improve accessibility without replacing a full review of your own product’s content and interaction states.
