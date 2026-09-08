import { createContext, useContext } from 'react';
import type { ThemeId } from './presets';
import type { PaletteMode } from '@mui/material';
export type Preferences = { mode: PaletteMode; themeId: ThemeId; compact: boolean };
export const defaultPreferences: Preferences = { mode: 'light', themeId: 'devfox', compact: false };
export const PreferencesContext = createContext<{
  preferences: Preferences;
  updatePreferences: (patch: Partial<Preferences>) => void;
}>({ preferences: defaultPreferences, updatePreferences: () => {} });
export const usePreferences = () => useContext(PreferencesContext);
