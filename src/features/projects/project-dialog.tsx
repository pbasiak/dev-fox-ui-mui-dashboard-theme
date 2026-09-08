import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Stack, TextField } from '@mui/material';
import type { Project } from './data';
import { localDate } from '../../lib/format';
export function ProjectDialog({
  project,
  onClose,
  onSave,
}: {
  project?: Project;
  onClose: () => void;
  onSave: (project: Project) => void;
}) {
  const [form, setForm] = useState({
    name: project?.name ?? '',
    description: project?.description ?? '',
    category: project?.category ?? 'Design',
    status: project?.status ?? 'In progress',
    due: project?.due ?? localDate(new Date()),
    progress: project?.progress ?? 0,
  });
  return (
    <Dialog open onClose={onClose} fullWidth maxWidth='sm' aria-labelledby='project-title'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!form.name.trim()) return;
          onSave({
            ...form,
            name: form.name.trim(),
            progress: form.status === 'Completed' ? 100 : form.progress,
            id: project?.id ?? crypto.randomUUID(),
            color: project?.color ?? '#df8752',
            members: project?.members ?? ['AM'],
          });
        }}
      >
        <DialogTitle id='project-title'>{project ? 'Edit project' : 'Start something great'}</DialogTitle>
        <DialogContent>
          <Stack sx={{ gap: 2.5, pt: 1 }}>
            <TextField
              label='Project name'
              required
              autoFocus
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
            />
            <TextField
              label='Description'
              multiline
              minRows={3}
              value={form.description}
              onChange={(event) => setForm({ ...form, description: event.target.value })}
            />
            <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: 2 }}>
              <TextField
                select
                fullWidth
                label='Category'
                value={form.category}
                onChange={(event) => setForm({ ...form, category: event.target.value })}
              >
                {['Design', 'Development', 'Branding', 'Product', 'Marketing'].map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                fullWidth
                label='Status'
                value={form.status}
                onChange={(event) => setForm({ ...form, status: event.target.value as Project['status'] })}
              >
                {['In progress', 'Review', 'Completed'].map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
            <Stack direction='row' sx={{ gap: 2 }}>
              <TextField
                fullWidth
                label='Due date'
                type='date'
                required
                value={form.due}
                onChange={(event) => setForm({ ...form, due: event.target.value })}
                slotProps={{ inputLabel: { shrink: true } }}
              />
              <TextField
                fullWidth
                label='Progress (%)'
                type='number'
                required
                value={form.progress}
                onChange={(event) => setForm({ ...form, progress: Number(event.target.value) })}
                slotProps={{ htmlInput: { min: 0, max: 100 } }}
              />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant='contained' type='submit'>
            {project ? 'Save changes' : 'Create project'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
