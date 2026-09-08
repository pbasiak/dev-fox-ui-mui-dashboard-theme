import { useMemo, useState } from 'react';
import { CssBaseline, Snackbar, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';
import { createAppTheme } from './theme/create-app-theme';
import { defaultPreferences, PreferencesContext } from './theme/preferences';
import { FeedbackContext } from './components/feedback';
import { useLocalStorage } from './hooks/use-local-storage';
import '@fontsource/rajdhani/600.css';
import '@fontsource/rajdhani/700.css';

export function App() {
  const [preferences, setPreferences] = useLocalStorage('devfox:appearance', defaultPreferences);
  const [message, setMessage] = useState('');
  const theme = useMemo(
    () => createAppTheme(preferences.mode, preferences.themeId),
    [preferences.mode, preferences.themeId],
  );
  return (
    <PreferencesContext.Provider
      value={{ preferences, updatePreferences: (patch) => setPreferences((value) => ({ ...value, ...patch })) }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FeedbackContext.Provider value={setMessage}>
          <RouterProvider router={router} />
          <Snackbar
            key={message}
            open={Boolean(message)}
            message={message}
            onClose={() => setMessage('')}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          />
        </FeedbackContext.Provider>
      </ThemeProvider>
    </PreferencesContext.Provider>
  );
}
