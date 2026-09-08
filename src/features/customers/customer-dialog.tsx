import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Stack, TextField } from '@mui/material';
import type { Customer } from './data';
import { localDate } from '../../lib/format';
export function CustomerDialog({
  customer,
  onClose,
  onSave,
}: {
  customer?: Customer;
  onClose: () => void;
  onSave: (customer: Customer) => void;
}) {
  const [form, setForm] = useState({
    name: customer?.name ?? '',
    email: customer?.email ?? '',
    company: customer?.company ?? '',
    role: customer?.role ?? 'Member',
    status: customer?.status ?? 'Active',
  });
  return (
    <Dialog open onClose={onClose} maxWidth='sm' fullWidth aria-labelledby='customer-dialog-title'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!form.name.trim() || !form.company.trim()) return;
          onSave({
            ...form,
            name: form.name.trim(),
            email: form.email.trim(),
            company: form.company.trim(),
            id: customer?.id ?? crypto.randomUUID(),
            joined: customer?.joined ?? localDate(new Date()),
            color: customer?.color ?? '#8b6fbe',
          });
        }}
      >
        <DialogTitle id='customer-dialog-title'>{customer ? 'Edit customer' : 'Add a customer'}</DialogTitle>
        <DialogContent>
          <Stack sx={{ gap: 2.5, pt: 1 }}>
            <TextField
              label='Full name'
              autoFocus
              required
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
            />
            <TextField
              label='Email address'
              type='email'
              required
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
            />
            <TextField
              label='Company'
              required
              value={form.company}
              onChange={(event) => setForm({ ...form, company: event.target.value })}
            />
            <Stack direction='row' sx={{ gap: 2 }}>
              <TextField
                select
                fullWidth
                label='Role'
                value={form.role}
                onChange={(event) => setForm({ ...form, role: event.target.value })}
              >
                {['Admin', 'Editor', 'Member'].map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                fullWidth
                label='Status'
                value={form.status}
                onChange={(event) => setForm({ ...form, status: event.target.value as Customer['status'] })}
              >
                {['Active', 'Inactive'].map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type='submit' variant='contained'>
            {customer ? 'Save changes' : 'Add customer'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
