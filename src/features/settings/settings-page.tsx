import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Divider,
  FormControlLabel,
  Stack,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import { PageHeader } from '../../components/page-header';
import { SectionCard } from '../../components/section-card';
import { useFeedback } from '../../components/feedback';
import { useLocalStorage } from '../../hooks/use-local-storage';
import { initials } from '../../lib/format';
import { AppearancePanel } from './appearance-panel';
const defaultProfile = {
  name: 'Alex Morgan',
  email: 'alex@devfox.design',
  role: 'Workspace admin',
  bio: 'Making thoughtful things with good people.',
};
export default function SettingsPage() {
  const location = useLocation();
  const tab = location.pathname.endsWith('/appearance')
    ? 'appearance'
    : location.pathname.endsWith('/notifications')
      ? 'notifications'
      : 'profile';
  const [profile, setProfile] = useLocalStorage('devfox:profile', defaultProfile);
  const [draft, setDraft] = useState(profile);
  const [notifications, setNotifications] = useLocalStorage('devfox:notification-preferences', {
    updates: true,
    digest: false,
    projects: true,
  });
  const notify = useFeedback();
  return (
    <>
      <PageHeader
        title={tab === 'appearance' ? 'Make yourself at home' : 'Settings'}
        description={
          tab === 'appearance'
            ? 'Your workspace should feel as good as the work you do in it.'
            : 'The little details that make this workspace yours.'
        }
      />
      <Tabs
        value={tab}
        aria-label='Settings sections'
        sx={{ mb: 3, borderBottom: '1px solid', borderColor: 'divider' }}
      >
        <Tab component={Link} to='/settings' value='profile' label='My profile' />
        <Tab component={Link} to='/settings/appearance' value='appearance' label='Appearance' />
        <Tab component={Link} to='/settings/notifications' value='notifications' label='Notifications' />
      </Tabs>
      <Box sx={{ maxWidth: 950 }}>
        {tab === 'appearance' ? (
          <AppearancePanel />
        ) : tab === 'profile' ? (
          <SectionCard title='Personal details' description='How you appear in this workspace.'>
            <Box
              component='form'
              onSubmit={(event) => {
                event.preventDefault();
                if (!draft.name.trim()) return;
                setProfile({ ...draft, name: draft.name.trim() });
                notify('Your profile has been saved.');
              }}
            >
              <Stack direction='row' sx={{ alignItems: 'center', gap: 2, py: 2, mb: 2 }}>
                <Avatar sx={{ width: 64, height: 64, fontSize: 21 }}>{initials(draft.name)}</Avatar>
                <Box>
                  <Typography variant='subtitle1'>{draft.name || 'Your name'}</Typography>
                  <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    Your initials keep things simple.
                  </Typography>
                </Box>
              </Stack>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
                <TextField
                  label='Full name'
                  required
                  value={draft.name}
                  onChange={(event) => setDraft({ ...draft, name: event.target.value })}
                />
                <TextField
                  label='Email address'
                  type='email'
                  required
                  value={draft.email}
                  onChange={(event) => setDraft({ ...draft, email: event.target.value })}
                />
                <TextField
                  label='Role'
                  value={draft.role}
                  onChange={(event) => setDraft({ ...draft, role: event.target.value })}
                />
                <TextField label='Workspace' value='DevFox workspace' slotProps={{ input: { readOnly: true } }} />
                <TextField
                  label='A little about you'
                  multiline
                  minRows={4}
                  value={draft.bio}
                  onChange={(event) => setDraft({ ...draft, bio: event.target.value })}
                  sx={{ gridColumn: '1 / -1' }}
                />
              </Box>
              <Divider sx={{ my: 3 }} />
              <Stack direction='row' sx={{ justifyContent: 'flex-end', gap: 1 }}>
                <Button variant='outlined' onClick={() => setDraft(profile)}>
                  Discard changes
                </Button>
                <Button variant='contained' type='submit'>
                  Save changes
                </Button>
              </Stack>
            </Box>
          </SectionCard>
        ) : (
          <SectionCard title='Keep the right things in the loop' description='Choose the updates that matter to you.'>
            <Alert severity='info' sx={{ mb: 2 }}>
              These preferences are saved locally for this demo. No emails are sent.
            </Alert>
            {[
              {
                key: 'updates',
                label: 'Workspace updates',
                description: 'News about the tools and features in your workspace.',
              },
              { key: 'digest', label: 'Weekly digest', description: 'A little perspective on your week’s progress.' },
              {
                key: 'projects',
                label: 'Project activity',
                description: 'Milestones, handoffs, and work worth celebrating.',
              },
            ].map((item) => (
              <Box key={item.key} sx={{ py: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={notifications[item.key as keyof typeof notifications]}
                      onChange={(_, checked) => setNotifications({ ...notifications, [item.key]: checked })}
                    />
                  }
                  label={<Typography sx={{ fontWeight: 600 }}>{item.label}</Typography>}
                />
                <Typography variant='body2' sx={{ color: 'text.secondary', ml: 6 }}>
                  {item.description}
                </Typography>
              </Box>
            ))}
          </SectionCard>
        )}
      </Box>
    </>
  );
}
