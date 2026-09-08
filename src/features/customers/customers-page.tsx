import { useState } from 'react';
import { alpha } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  IconButton,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
  Tooltip,
  Typography,
} from '@mui/material';
import AddRounded from '@mui/icons-material/AddRounded';
import EditOutlined from '@mui/icons-material/EditOutlined';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import FileDownloadOutlined from '@mui/icons-material/FileDownloadOutlined';
import { PageHeader } from '../../components/page-header';
import { SectionCard } from '../../components/section-card';
import { StatusChip } from '../../components/status-chip';
import { SearchField } from '../../components/search-field';
import { EmptyState } from '../../components/empty-state';
import { ConfirmDialog } from '../../components/confirm-dialog';
import { useFeedback } from '../../components/feedback';
import { useLocalStorage } from '../../hooks/use-local-storage';
import { dateLabel, downloadCsv, initials } from '../../lib/format';
import { initialCustomers } from './data';
import type { Customer } from './data';
import { CustomerDialog } from './customer-dialog';

export default function CustomersPage() {
  const [customers, setCustomers] = useLocalStorage('devfox:customers', initialCustomers);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All customers');
  const [selected, setSelected] = useState<string[]>([]);
  const [deleting, setDeleting] = useState<string[]>([]);
  const [editing, setEditing] = useState<Customer | 'new' | null>(null);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const notify = useFeedback();
  const filtered = customers.filter(
    (customer) =>
      (status === 'All customers' || customer.status === status) &&
      `${customer.name} ${customer.email} ${customer.company}`.toLowerCase().includes(query.toLowerCase()),
  );
  const visible = filtered.slice(page * pageSize, (page + 1) * pageSize);
  const allSelected = visible.length > 0 && visible.every((customer) => selected.includes(customer.id));
  function save(customer: Customer) {
    if (
      customers.some((item) => item.id !== customer.id && item.email.toLowerCase() === customer.email.toLowerCase())
    ) {
      notify('A customer with this email already exists.');
      return;
    }
    setCustomers((items) =>
      editing === 'new' ? [customer, ...items] : items.map((item) => (item.id === customer.id ? customer : item)),
    );
    setEditing(null);
    setPage(0);
    notify(editing === 'new' ? 'Customer added to your workspace.' : 'Customer updated.');
  }
  return (
    <>
      <PageHeader
        title='Customers'
        description='Good relationships start with knowing your people.'
        action={
          <>
            <Button
              variant='outlined'
              startIcon={<FileDownloadOutlined />}
              onClick={() =>
                downloadCsv('devfox-customers.csv', [
                  ['Name', 'Email', 'Company', 'Role', 'Status'],
                  ...filtered.map((customer) => [
                    customer.name,
                    customer.email,
                    customer.company,
                    customer.role,
                    customer.status,
                  ]),
                ])
              }
            >
              Export
            </Button>
            <Button variant='contained' startIcon={<AddRounded />} onClick={() => setEditing('new')}>
              Add customer
            </Button>
          </>
        }
      />
      <SectionCard noPadding>
        <Tabs
          value={status}
          onChange={(_, value: string) => {
            setStatus(value);
            setPage(0);
          }}
          variant='scrollable'
          aria-label='Customer status'
          sx={{ px: 1, borderBottom: '1px solid', borderColor: 'divider' }}
        >
          {['All customers', 'Active', 'Inactive'].map((value) => (
            <Tab
              key={value}
              value={value}
              label={`${value} (${customers.filter((customer) => value === 'All customers' || customer.status === value).length})`}
            />
          ))}
        </Tabs>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}

          sx={{ alignItems: { xs: 'stretch', sm: 'center' }, justifyContent: 'space-between', gap: 2, p: 2.5 }}
        >
          <SearchField
            placeholder='Search customers…'
            value={query}
            onChange={(value) => {
              setQuery(value);
              setPage(0);
            }}
          />
          {selected.length ? (
            <Button color='error' startIcon={<DeleteOutlined />} onClick={() => setDeleting(selected)}>
              Delete {selected.length} selected
            </Button>
          ) : (
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              {filtered.length} people in your workspace
            </Typography>
          )}
        </Stack>
        <TableContainer>
          <Table aria-label='Customers' sx={{ minWidth: 780 }}>
            <TableHead>
              <TableRow>
                <TableCell padding='checkbox'>
                  <Checkbox
                    checked={allSelected}
                    indeterminate={!allSelected && visible.some((customer) => selected.includes(customer.id))}
                    onChange={() =>
                      setSelected(
                        allSelected
                          ? selected.filter((id) => !visible.some((customer) => customer.id === id))
                          : [...new Set([...selected, ...visible.map((customer) => customer.id)])],
                      )
                    }
                    slotProps={{ input: { 'aria-label': 'Select visible customers' } }}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Joined</TableCell>
                <TableCell align='right'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visible.map((customer) => (
                <TableRow hover key={customer.id} selected={selected.includes(customer.id)}>
                  <TableCell padding='checkbox'>
                    <Checkbox
                      checked={selected.includes(customer.id)}
                      onChange={() =>
                        setSelected(
                          selected.includes(customer.id)
                            ? selected.filter((id) => id !== customer.id)
                            : [...selected, customer.id],
                        )
                      }
                      slotProps={{ input: { 'aria-label': `Select ${customer.name}` } }}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack direction='row' sx={{ gap: 1.5, alignItems: 'center' }}>
                      <Avatar
                        sx={{ bgcolor: alpha(customer.color, 0.14), color: 'text.primary', width: 36, height: 36 }}
                      >
                        {initials(customer.name)}
                      </Avatar>
                      <Box>
                        <Typography variant='body2' sx={{ fontWeight: 600 }}>
                          {customer.name}
                        </Typography>
                        <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                          {customer.email}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <StatusChip status={customer.status} />
                  </TableCell>
                  <TableCell>{customer.company}</TableCell>
                  <TableCell>{customer.role}</TableCell>
                  <TableCell sx={{ color: 'text.secondary', whiteSpace: 'nowrap' }}>
                    {dateLabel(customer.joined)}
                  </TableCell>
                  <TableCell align='right'>
                    <Tooltip title='Edit customer'>
                      <IconButton
                        aria-label={`Edit ${customer.name}`}
                        onClick={() => setEditing(customer)}
                        size='small'
                      >
                        <EditOutlined sx={{ fontSize: 17 }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Delete customer'>
                      <IconButton
                        aria-label={`Delete ${customer.name}`}
                        onClick={() => setDeleting([customer.id])}
                        size='small'
                      >
                        <DeleteOutlined sx={{ fontSize: 17 }} />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {!filtered.length && <EmptyState />}
        <TablePagination
          component='div'
          count={filtered.length}
          page={page}
          onPageChange={(_, value) => setPage(value)}
          rowsPerPage={pageSize}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={(event) => {
            setPageSize(Number(event.target.value));
            setPage(0);
          }}
        />
      </SectionCard>
      {editing && (
        <CustomerDialog
          customer={editing === 'new' ? undefined : editing}
          onClose={() => setEditing(null)}
          onSave={save}
        />
      )}
      <ConfirmDialog
        open={deleting.length > 0}
        title={`Delete ${deleting.length === 1 ? 'customer' : `${deleting.length} customers`}?`}
        description='This removes the selected customers from this browser’s demo workspace.'
        onClose={() => setDeleting([])}
        onConfirm={() => {
          setCustomers((items) => items.filter((customer) => !deleting.includes(customer.id)));
          setSelected((items) => items.filter((id) => !deleting.includes(id)));
          setDeleting([]);
          setPage(0);
          notify('Customers deleted.');
        }}
      />
    </>
  );
}
