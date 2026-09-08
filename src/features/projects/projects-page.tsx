import { useState } from 'react';
import { alpha } from '@mui/material/styles';
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  Chip,
  IconButton,
  LinearProgress,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import AddRounded from '@mui/icons-material/AddRounded';
import EditOutlined from '@mui/icons-material/EditOutlined';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import FolderOutlined from '@mui/icons-material/FolderOutlined';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import { PageHeader } from '../../components/page-header';
import { SearchField } from '../../components/search-field';
import { StatusChip } from '../../components/status-chip';
import { EmptyState } from '../../components/empty-state';
import { ConfirmDialog } from '../../components/confirm-dialog';
import { useFeedback } from '../../components/feedback';
import { useLocalStorage } from '../../hooks/use-local-storage';
import { dateLabel } from '../../lib/format';
import { initialProjects } from './data';
import type { Project } from './data';
import { ProjectDialog } from './project-dialog';
export default function ProjectsPage() {
  const [projects, setProjects] = useLocalStorage('devfox:projects', initialProjects);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All projects');
  const [editing, setEditing] = useState<Project | 'new' | null>(null);
  const [deleting, setDeleting] = useState<Project | null>(null);
  const notify = useFeedback();
  const filtered = projects.filter(
    (project) =>
      (status === 'All projects' || project.status === status) &&
      `${project.name} ${project.category}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <PageHeader
        title='Projects'
        description='Big ideas, small steps. Bring your team’s work together.'
        action={
          <Button variant='contained' startIcon={<AddRounded />} onClick={() => setEditing('new')}>
            New project
          </Button>
        }
      />
      <Stack direction={{ xs: 'column', md: 'row' }} sx={{ justifyContent: 'space-between', gap: 2, mb: 3 }}>
        <Tabs
          value={status}
          onChange={(_, value: string) => setStatus(value)}
          variant='scrollable'
          aria-label='Project status'
        >
          {['All projects', 'In progress', 'Review', 'Completed'].map((value) => (
            <Tab label={value} value={value} key={value} />
          ))}
        </Tabs>
        <SearchField value={query} onChange={setQuery} placeholder='Search projects…' />
      </Stack>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' },
          gap: 2.5,
        }}
      >
        {filtered.map((project) => (
          <Card key={project.id} sx={{ p: 2.5 }}>
            <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Avatar
                variant='rounded'
                sx={{ width: 43, height: 43, bgcolor: alpha(project.color, 0.13), color: project.color }}
              >
                <FolderOutlined />
              </Avatar>
              <StatusChip status={project.status} />
              <Box>
                <IconButton size='small' aria-label={`Edit ${project.name}`} onClick={() => setEditing(project)}>
                  <EditOutlined sx={{ fontSize: 17 }} />
                </IconButton>
                <IconButton size='small' aria-label={`Delete ${project.name}`} onClick={() => setDeleting(project)}>
                  <DeleteOutlined sx={{ fontSize: 17 }} />
                </IconButton>
              </Box>
            </Stack>
            <Typography variant='h3' sx={{ mb: 1 }}>
              {project.name}
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary', minHeight: 65 }}>
              {project.description}
            </Typography>
            <Chip label={project.category} variant='outlined' sx={{ mt: 1.5 }} />
            <Stack direction='row' sx={{ justifyContent: 'space-between', mt: 3 }}>
              <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                Progress
              </Typography>
              <Typography variant='caption' sx={{ fontWeight: 600 }}>
                {project.progress}%
              </Typography>
            </Stack>
            <LinearProgress
              aria-label={`${project.name} progress`}
              variant='determinate'
              value={project.progress}
              sx={{ mt: 1, mb: 2.5, '& .MuiLinearProgress-bar': { bgcolor: project.color } }}
            />
            <Stack
              direction='row'

              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                pt: 2,
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 27, height: 27, fontSize: 9 } }}>
                {project.members.map((member) => (
                  <Avatar key={member}>{member}</Avatar>
                ))}
              </AvatarGroup>
              <Stack direction='row' sx={{ alignItems: 'center', gap: 0.7, color: 'text.secondary' }}>
                <CalendarTodayOutlined sx={{ fontSize: 13 }} />
                <Typography variant='caption'>{dateLabel(project.due)}</Typography>
              </Stack>
            </Stack>
          </Card>
        ))}
      </Box>
      {!filtered.length && <EmptyState />}
      {editing && (
        <ProjectDialog
          project={editing === 'new' ? undefined : editing}
          onClose={() => setEditing(null)}
          onSave={(project) => {
            setProjects((items) =>
              editing === 'new' ? [project, ...items] : items.map((item) => (item.id === project.id ? project : item)),
            );
            setEditing(null);
            notify('Project saved.');
          }}
        />
      )}
      <ConfirmDialog
        open={Boolean(deleting)}
        title='Delete project?'
        description={`“${deleting?.name}” will be removed from your demo workspace.`}
        onClose={() => setDeleting(null)}
        onConfirm={() => {
          setProjects((items) => items.filter((item) => item.id !== deleting?.id));
          setDeleting(null);
          notify('Project deleted.');
        }}
      />
    </>
  );
}
