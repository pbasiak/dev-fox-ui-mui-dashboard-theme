import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Stack, TextField } from '@mui/material';
import type { CalendarEvent } from './data';
export function EventDialog({
  date,
  event,
  onClose,
  onSave,
  onDelete,
}: {
  date: string;
  event?: CalendarEvent;
  onClose: () => void;
  onSave: (event: CalendarEvent) => void;
  onDelete: (id: string) => void;
}) {
  const [form, setForm] = useState({
    title: event?.title ?? '',
    date: event?.date ?? date,
    time: event?.time ?? '09:00',
    category: event?.category ?? 'Meeting',
  });
  return (
    <Dialog open onClose={onClose} fullWidth maxWidth='sm' aria-labelledby='event-title'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!form.title.trim()) return;
          onSave({ ...form, title: form.title.trim(), id: event?.id ?? crypto.randomUUID() });
        }}
      >
        <DialogTitle id='event-title'>{event ? 'Edit event' : 'Make time for something good'}</DialogTitle>
        <DialogContent>
          <Stack sx={{ gap: 2.5, pt: 1 }}>
            <TextField
              required
              autoFocus
              label='Event name'
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <Stack direction='row' sx={{ gap: 2 }}>
              <TextField
                fullWidth
                required
                label='Date'
                type='date'
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                slotProps={{ inputLabel: { shrink: true } }}
              />
              <TextField
                fullWidth
                required
                label='Time'
                type='time'
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                slotProps={{ inputLabel: { shrink: true } }}
              />
            </Stack>
            <TextField
              select
              label='Category'
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value as CalendarEvent['category'] })}
            >
              {['Meeting', 'Focus time', 'Milestone'].map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions>
          {event && (
            <Button color='error' onClick={() => onDelete(event.id)} sx={{ mr: 'auto' }}>
              Delete event
            </Button>
          )}
          <Button onClick={onClose}>Cancel</Button>
          <Button type='submit' variant='contained'>
            Save event
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
