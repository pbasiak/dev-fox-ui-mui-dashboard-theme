import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Alert,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  LinearProgress,
  MenuItem,
  Slider,
  Stack,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import AddRounded from '@mui/icons-material/AddRounded';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import ContentCopyRounded from '@mui/icons-material/ContentCopyRounded';
import { PageHeader } from '../../components/page-header';
import { SectionCard } from '../../components/section-card';
import { StatusChip } from '../../components/status-chip';
import { EmptyState } from '../../components/empty-state';
import { ConfirmDialog } from '../../components/confirm-dialog';
import { useFeedback } from '../../components/feedback';
export default function ComponentsPage() {
  const [tab, setTab] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [progress, setProgress] = useState(64);
  const theme = useTheme();
  const notify = useFeedback();
  const example = `import { SectionCard } from './components/section-card';\nimport { StatusChip } from './components/status-chip';\n\n<SectionCard title="Your next idea">\n  <StatusChip status="In progress" />\n</SectionCard>`;
  return (
    <>
      <PageHeader
        title='Small pieces. Endless possibilities.'
        description='A living collection of the components that make this workspace feel like one.'
        eyebrow='The DevFox UI kit'
        action={
          <Button component={Link} to='/settings/appearance' variant='outlined'>
            Explore themes
          </Button>
        }
      />
      <Tabs
        value={tab}
        onChange={(_, value: number) => setTab(value)}
        aria-label='Component categories'
        sx={{ mb: 3, borderBottom: '1px solid', borderColor: 'divider' }}
      >
        <Tab label='Components' />
        <Tab label='Foundations' />
        <Tab label='Getting started' />
      </Tabs>
      {tab === 0 ? (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 2.5 }}>
          <SectionCard title='Buttons' description='Clear actions, from a quiet nudge to the next big step.'>
            <Stack direction='row' sx={{ gap: 1.5, flexWrap: 'wrap', mt: 1 }}>
              <Button variant='contained' startIcon={<AddRounded />} onClick={() => notify('Primary action clicked.')}>
                Create project
              </Button>
              <Button variant='outlined' onClick={() => notify('Secondary action clicked.')}>
                Secondary
              </Button>
              <Button onClick={() => notify('Text action clicked.')}>Text button</Button>
              <Button disabled variant='contained'>
                Disabled
              </Button>
            </Stack>
            <Divider sx={{ my: 2.5 }} />
            <Stack direction='row' sx={{ gap: 1.5, flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant='contained' size='small' onClick={() => notify('Small button clicked.')}>
                Small
              </Button>
              <Button variant='contained' onClick={() => notify('Medium button clicked.')}>
                Medium
              </Button>
              <Button variant='contained' size='large' onClick={() => notify('Large button clicked.')}>
                Large
              </Button>
            </Stack>
          </SectionCard>
          <SectionCard title='Status and labels' description='A little context, right where it’s needed.'>
            <Stack direction='row' sx={{ gap: 1, flexWrap: 'wrap', mt: 1 }}>
              {['Paid', 'Pending', 'In progress', 'Draft', 'Refunded', 'Cancelled', 'Completed'].map((status) => (
                <StatusChip key={status} status={status} />
              ))}
            </Stack>
            <Stack direction='row' sx={{ gap: 1, flexWrap: 'wrap', mt: 3 }}>
              <Chip label='Design' variant='outlined' />
              <Chip label='Engineering' variant='outlined' />
              <Chip label='Removable' onDelete={() => notify('Use onDelete to update your feature’s labels.')} />
            </Stack>
          </SectionCard>
          <SectionCard title='Form fields' description='Labels, helpful context, and room to get it right.'>
            <Stack sx={{ gap: 2.5, mt: 1 }}>
              <TextField label='Project name' placeholder='Something worth making' />
              <TextField select label='Project category' defaultValue='Design'>
                <MenuItem value='Design'>Design</MenuItem>
                <MenuItem value='Development'>Development</MenuItem>
              </TextField>
              <TextField
                error
                label='Email address'
                defaultValue='alex@'
                helperText='Please enter a complete email address.'
              />
            </Stack>
          </SectionCard>
          <SectionCard title='Choice and progress' description='Small controls with clear, predictable feedback.'>
            <Stack>
              <FormControlLabel control={<Switch defaultChecked />} label='Keep me in the loop' />
              <FormControlLabel control={<Checkbox defaultChecked />} label='Include completed tasks' />
              <Typography variant='body2' sx={{ mt: 2 }}>
                Project progress: {progress}%
              </Typography>
              <Slider
                value={progress}
                onChange={(_, value) => setProgress(Number(value))}
                aria-label='Project progress'
              />
              <LinearProgress
                aria-label='Example project progress'
                variant='determinate'
                value={progress}
                sx={{ mt: 2 }}
              />
              <AvatarGroup max={4} sx={{ justifyContent: 'flex-end', mt: 3 }}>
                {['AM', 'OR', 'PB', 'LS', 'DC'].map((person) => (
                  <Avatar key={person}>{person}</Avatar>
                ))}
              </AvatarGroup>
            </Stack>
          </SectionCard>
          <SectionCard title='Feedback' description='Say what happened and help people move forward.'>
            <Stack sx={{ gap: 1.5 }}>
              <Alert severity='success'>Your changes are saved. Looking good.</Alert>
              <Alert severity='info'>A little context can make a big difference.</Alert>
              <Alert severity='warning'>This project is getting close to its due date.</Alert>
              <Alert severity='error'>Something went wrong. Please try again.</Alert>
            </Stack>
          </SectionCard>
          <SectionCard title='Empty states and dialogs' description='Every state deserves a little care.'>
            <EmptyState
              title='Room for your next idea'
              description='Create your first project to get things moving.'
              action={
                <Button variant='outlined' onClick={() => setDialogOpen(true)}>
                  Preview confirmation
                </Button>
              }
            />
          </SectionCard>
        </Box>
      ) : tab === 1 ? (
        <Stack sx={{ gap: 3 }}>
          <SectionCard
            title='A palette with purpose'
            description='Semantic tokens adapt to every theme and color mode.'
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' },
                gap: 2,
              }}
            >
              {(['primary', 'secondary', 'success', 'info', 'warning', 'error'] as const).map((color) => (
                <Box key={color}>
                  <Box sx={{ bgcolor: `${color}.main`, height: 80, borderRadius: '8px', mb: 1 }} />
                  <Typography variant='subtitle2' sx={{ textTransform: 'capitalize' }}>
                    {color}
                  </Typography>
                  <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                    {theme.palette[color].main}
                  </Typography>
                </Box>
              ))}
            </Box>
          </SectionCard>
          <SectionCard
            title='Type that gets out of the way'
            description='Inter for everyday clarity. Rajdhani adds character to Cyberpunk headings.'
          >
            <Stack sx={{ gap: 2 }}>
              {(['h1', 'h2', 'h3', 'h4', 'body1', 'body2', 'caption', 'overline'] as const).map((variant) => (
                <Stack key={variant} direction='row' sx={{ alignItems: 'baseline', gap: 3 }}>
                  <Typography variant='caption' sx={{ color: 'text.secondary', width: 60, flexShrink: 0 }}>
                    {variant}
                  </Typography>
                  <Typography variant={variant} component='p'>
                    A little more possible.
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </SectionCard>
          <SectionCard title='Space to breathe' description='An 8-pixel scale keeps the rhythm consistent.'>
            <Stack direction='row' sx={{ alignItems: 'flex-end', gap: 3, flexWrap: 'wrap' }}>
              {[1, 2, 3, 4, 6, 8].map((value) => (
                <Box key={value} sx={{ textAlign: 'center' }}>
                  <Box sx={{ width: value * 8, height: value * 8, bgcolor: 'primary.main', borderRadius: 1, mb: 1 }} />
                  <Typography variant='caption'>{value * 8}px</Typography>
                </Box>
              ))}
            </Stack>
          </SectionCard>
        </Stack>
      ) : (
        <Stack sx={{ gap: 3 }}>
          <SectionCard
            title='Take a piece. Make it yours.'
            description='Start with one component or a whole feature. Everything runs locally.'
          >
            <Typography sx={{ mb: 2 }}>
              Each feature owns its data, types, pages, and dialogs. Shared components receive ordinary props and never
              depend on a feature or backend.
            </Typography>
            <Box
              component='pre'
              sx={{
                p: 2.5,
                bgcolor: 'action.hover',
                borderRadius: '8px',
                overflowX: 'auto',
                fontSize: 12,
                lineHeight: 1.9,
              }}
            >
              {example}
            </Box>
            <Button
              startIcon={<ContentCopyRounded />}
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(example);
                  notify('Example copied to clipboard.');
                } catch {
                  notify('Clipboard unavailable. Select and copy the example above.');
                }
              }}
            >
              Copy example
            </Button>
          </SectionCard>
          <SectionCard title='Your shortest path to a working screen'>
            <Stack sx={{ gap: 2 }}>
              {[
                'Wrap your app with ThemeProvider and createAppTheme().',
                'Copy a feature folder and the shared components it imports.',
                'Use the included typed data, or replace the storage hook with your API.',
                'Register the page in your router and make it your own.',
              ].map((text, index) => (
                <Stack key={text} direction='row' sx={{ gap: 2, alignItems: 'center' }}>
                  <Avatar sx={{ width: 28, height: 28 }}>{index + 1}</Avatar>
                  <Typography>{text}</Typography>
                </Stack>
              ))}
            </Stack>
            <Button component={Link} to='/projects' endIcon={<ArrowForwardRounded />} sx={{ mt: 3 }}>
              Explore a complete feature
            </Button>
          </SectionCard>
        </Stack>
      )}
      <ConfirmDialog
        open={dialogOpen}
        title='Preview a confirmation dialog'
        description='This example does not delete any data. Real destructive actions should explain what will be removed.'
        onClose={() => setDialogOpen(false)}
        onConfirm={() => {
          setDialogOpen(false);
          notify('Confirmation complete. No data was deleted.');
        }}
      />
    </>
  );
}
