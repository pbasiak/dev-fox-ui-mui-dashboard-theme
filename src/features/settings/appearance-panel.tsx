import { alpha } from '@mui/material/styles';
import {
  Box,
  Button,
  ButtonBase,
  FormControlLabel,
  Stack,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import CheckCircleRounded from '@mui/icons-material/CheckCircleRounded';
import { SectionCard } from '../../components/section-card';
import { themePresets, presetTokens } from '../../theme/presets';
import { defaultPreferences, usePreferences } from '../../theme/preferences';
export function AppearancePanel() {
  const { preferences, updatePreferences } = usePreferences();
  return (
    <Stack sx={{ gap: 3 }}>
      <SectionCard
        title='A workspace that feels like you'
        description='Four personalities. Two modes. The same thoughtful foundations.'
      >
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2, mt: 1 }}>
          {themePresets.map((preset) => {
            const tokens = presetTokens(preset.id, preferences.mode);
            const active = preferences.themeId === preset.id;
            return (
              <ButtonBase
                key={preset.id}
                aria-label={`${preset.name} theme`}
                aria-pressed={active}
                onClick={() => updatePreferences({ themeId: preset.id })}
                sx={{
                  display: 'block',
                  textAlign: 'left',
                  border: '2px solid',
                  borderColor: active ? 'primary.main' : 'divider',
                  borderRadius: '12px',
                  p: 1.5,
                }}
              >
                <Box
                  sx={{
                    bgcolor: tokens.canvas,
                    p: 1.5,
                    borderRadius: '8px',
                    height: 120,
                    display: 'flex',
                    gap: 1,
                    border: `1px solid ${tokens.border}`,
                  }}
                >
                  <Stack sx={{ gap: 0.8, width: 45, bgcolor: tokens.paper, p: 0.8, borderRadius: 0.5 }}>
                    <Box sx={{ width: 12, height: 12, bgcolor: tokens.accent, borderRadius: 0.5, mb: 0.5 }} />
                    {[0, 1, 2, 3].map((i) => (
                      <Box
                        key={i}
                        sx={{ height: 4, bgcolor: i === 0 ? tokens.accent : tokens.border, borderRadius: 1 }}
                      />
                    ))}
                  </Stack>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ bgcolor: tokens.text, width: '40%', height: 5, borderRadius: 1, mb: 1.5 }} />
                    <Stack direction='row' sx={{ gap: 0.7 }}>
                      {[0, 1, 2].map((i) => (
                        <Box key={i} sx={{ bgcolor: tokens.paper, p: 0.8, flex: 1, borderRadius: 0.7 }}>
                          <Box sx={{ height: 3, bgcolor: tokens.border, mb: 0.7 }} />
                          <Box sx={{ height: 7, bgcolor: tokens.accent, width: '60%', borderRadius: 0.5 }} />
                        </Box>
                      ))}
                    </Stack>
                    <Box
                      sx={{
                        height: 31,
                        bgcolor: alpha(tokens.accent, 0.1),
                        mt: 1,
                        borderBottom: `2px solid ${tokens.accent}`,
                        borderRadius: 0.7,
                      }}
                    />
                  </Box>
                </Box>
                <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center', mt: 1.5 }}>
                  <Typography variant='subtitle1'>{preset.name}</Typography>
                  {active && <CheckCircleRounded color='primary' sx={{ fontSize: 18 }} />}
                </Stack>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  {preset.description}
                </Typography>
              </ButtonBase>
            );
          })}
        </Box>
      </SectionCard>
      <SectionCard
        title='Choose your light'
        description='Every palette is designed for both bright and low-light spaces.'
      >
        <ToggleButtonGroup
          exclusive
          value={preferences.mode}
          onChange={(_, value: 'light' | 'dark' | null) => {
            if (value) updatePreferences({ mode: value });
          }}
          aria-label='Color mode'
          sx={{ mt: 1 }}
        >
          <ToggleButton value='light' sx={{ px: 4, gap: 1 }}>
            <LightModeOutlined fontSize='small' />
            Light
          </ToggleButton>
          <ToggleButton value='dark' sx={{ px: 4, gap: 1 }}>
            <DarkModeOutlined fontSize='small' />
            Dark
          </ToggleButton>
        </ToggleButtonGroup>
      </SectionCard>
      <SectionCard title='A little more room'>
        <FormControlLabel
          control={
            <Switch checked={preferences.compact} onChange={(_, checked) => updatePreferences({ compact: checked })} />
          }
          label='Compact workspace spacing'
        />
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          Reduce the space around pages on larger screens.
        </Typography>
      </SectionCard>
      <Box>
        <Button variant='outlined' onClick={() => updatePreferences(defaultPreferences)}>
          Reset appearance
        </Button>
      </Box>
    </Stack>
  );
}
