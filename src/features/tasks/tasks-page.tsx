import { useState } from 'react';
import { alpha } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox,
  Chip,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import AddRounded from '@mui/icons-material/AddRounded';
import EditOutlined from '@mui/icons-material/EditOutlined';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import { PageHeader } from '../../components/page-header';
import { SectionCard } from '../../components/section-card';
import { SearchField } from '../../components/search-field';
import { EmptyState } from '../../components/empty-state';
import { useFeedback } from '../../components/feedback';
import { useLocalStorage } from '../../hooks/use-local-storage';
import { initialTasks } from './data';
import type { Task } from './data';
import { TaskDialog } from './task-dialog';
export default function TasksPage() {
  const [tasks, setTasks] = useLocalStorage('devfox:tasks', initialTasks);
  const [status, setStatus] = useState('All tasks');
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState<Task | 'new' | null>(null);
  const notify = useFeedback();
  const done = tasks.filter((task) => task.completed).length;
  const filtered = tasks.filter(
    (task) =>
      (status === 'All tasks' || (status === 'Completed' ? task.completed : !task.completed)) &&
      `${task.title} ${task.project}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <PageHeader
        title='Tasks'
        description='Clear your mind. Make space for your best work.'
        action={
          <Button startIcon={<AddRounded />} variant='contained' onClick={() => setEditing('new')}>
            Add task
          </Button>
        }
      />
      <SectionCard sx={{ mb: 3 }}>
        <Stack direction='row' sx={{ alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              color: 'success.main',
              bgcolor: (theme) => alpha(theme.palette.success.main, 0.08),
              p: 1.5,
              borderRadius: '12px',
            }}
          >
            <CheckCircleOutlined />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
              <Typography variant='subtitle1'>You’re making progress</Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                {done} of {tasks.length} completed
              </Typography>
            </Stack>
            <LinearProgress
              aria-label='Task completion'
              color='success'
              variant='determinate'
              value={tasks.length ? (done / tasks.length) * 100 : 0}
              sx={{ mt: 1.5 }}
            />
          </Box>
        </Stack>
      </SectionCard>
      <SectionCard noPadding>
        <Stack
          direction={{ xs: 'column', md: 'row' }}

          sx={{ justifyContent: 'space-between', alignItems: { md: 'center' }, gap: 2, p: 2 }}
        >
          <Tabs
            value={status}
            onChange={(_, value: string) => setStatus(value)}
            aria-label='Task status'
            variant='scrollable'
          >
            {['All tasks', 'Active', 'Completed'].map((value) => (
              <Tab label={value} value={value} key={value} />
            ))}
          </Tabs>
          <SearchField value={query} onChange={setQuery} placeholder='Search tasks…' />
        </Stack>
        <List disablePadding>
          {filtered.map((task) => (
            <ListItem
              key={task.id}
              sx={{
                px: { xs: 1, sm: 2.5 },
                py: 2,
                borderTop: '1px solid',
                borderColor: 'divider',
                gap: { xs: 0.5, sm: 1.2 },
              }}
            >
              <Checkbox
                checked={task.completed}
                onChange={() =>
                  setTasks((items) =>
                    items.map((item) => (item.id === task.id ? { ...item, completed: !item.completed } : item)),
                  )
                }
                slotProps={{ input: { 'aria-label': `Complete ${task.title}` } }}
              />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  sx={{
                    fontWeight: 550,
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'text.secondary' : 'text.primary',
                  }}
                >
                  {task.title}
                </Typography>
                <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                  {task.project}
                </Typography>
              </Box>
              <Chip
                label={task.priority}
                variant='outlined'
                color={task.priority === 'High' ? 'error' : task.priority === 'Medium' ? 'warning' : 'default'}
                sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
              />
              <IconButton aria-label={`Edit ${task.title}`} onClick={() => setEditing(task)} size='small'>
                <EditOutlined fontSize='small' />
              </IconButton>
              <IconButton
                aria-label={`Delete ${task.title}`}
                onClick={() => {
                  setTasks((items) => items.filter((item) => item.id !== task.id));
                  notify('Task deleted.');
                }}
                size='small'
              >
                <DeleteOutlined fontSize='small' />
              </IconButton>
            </ListItem>
          ))}
        </List>
        {!filtered.length && (
          <EmptyState
            title={tasks.length ? 'Nothing here. A little breathing room.' : 'Your next step starts here'}
            description='Add a task or try another filter.'
          />
        )}
      </SectionCard>
      {editing && (
        <TaskDialog
          task={editing === 'new' ? undefined : editing}
          onClose={() => setEditing(null)}
          onSave={(task) => {
            setTasks((items) =>
              editing === 'new' ? [task, ...items] : items.map((item) => (item.id === task.id ? task : item)),
            );
            setEditing(null);
            notify('Task saved.');
          }}
        />
      )}
    </>
  );
}
