import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Stack, TextField } from '@mui/material';
import type { Task } from './data';
export function TaskDialog({
  task,
  onSave,
  onClose,
}: {
  task?: Task;
  onSave: (task: Task) => void;
  onClose: () => void;
}) {
  const [title, setTitle] = useState(task?.title ?? '');
  const [project, setProject] = useState(task?.project ?? 'Personal');
  const [priority, setPriority] = useState<Task['priority']>(task?.priority ?? 'Medium');
  return (
    <Dialog open onClose={onClose} maxWidth='sm' fullWidth aria-labelledby='task-title'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!title.trim()) return;
          onSave({
            id: task?.id ?? crypto.randomUUID(),
            title: title.trim(),
            project: project.trim() || 'Personal',
            priority,
            completed: task?.completed ?? false,
          });
        }}
      >
        <DialogTitle id='task-title'>{task ? 'Edit task' : 'One step closer'}</DialogTitle>
        <DialogContent>
          <Stack sx={{ gap: 2.5, pt: 1 }}>
            <TextField
              autoFocus
              required
              label='Task name'
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <TextField label='Project' value={project} onChange={(event) => setProject(event.target.value)} />
            <TextField
              select
              label='Priority'
              value={priority}
              onChange={(event) => setPriority(event.target.value as Task['priority'])}
            >
              {['Low', 'Medium', 'High'].map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant='contained' type='submit'>
            {task ? 'Save task' : 'Add task'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
