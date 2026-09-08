import { useState } from 'react';
import { Box, Button, Stack, Tab, TablePagination, Tabs, Typography } from '@mui/material';
import FileDownloadOutlined from '@mui/icons-material/FileDownloadOutlined';
import { PageHeader } from '../../components/page-header';
import { SectionCard } from '../../components/section-card';
import { SearchField } from '../../components/search-field';
import { initialOrders } from './data';
import type { Order } from './data';
import { useLocalStorage } from '../../hooks/use-local-storage';
import { OrdersTable } from './orders-table';
import { OrderDetail } from './order-detail';
import { currency, downloadCsv } from '../../lib/format';

export default function OrdersPage() {
  const [orders] = useLocalStorage('devfox:orders', initialOrders);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All orders');
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [selected, setSelected] = useState<Order | null>(null);
  const filtered = orders.filter(
    (order) =>
      (status === 'All orders' || order.status === status) &&
      `${order.id} ${order.customer} ${order.email} ${order.product}`.toLowerCase().includes(query.toLowerCase()),
  );
  const paid = orders.filter((order) => order.status === 'Paid').reduce((sum, order) => sum + order.amount, 0);
  return (
    <>
      <PageHeader
        title='Orders'
        description='Keep every purchase, payment, and customer in view.'
        action={
          <Button
            variant='outlined'
            startIcon={<FileDownloadOutlined />}
            onClick={() =>
              downloadCsv('devfox-orders.csv', [
                ['Order', 'Customer', 'Product', 'Date', 'Amount', 'Status'],
                ...filtered.map((order) => [
                  order.id,
                  order.customer,
                  order.product,
                  order.date,
                  order.amount,
                  order.status,
                ]),
              ])
            }
          >
            Export orders
          </Button>
        }
      />
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2, mb: 3 }}>
        {[
          { label: 'Collected revenue', value: currency(paid) },
          { label: 'Total orders', value: orders.length },
          { label: 'Awaiting payment', value: orders.filter((order) => order.status === 'Pending').length },
        ].map((stat) => (
          <SectionCard key={stat.label}>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              {stat.label}
            </Typography>
            <Typography variant='h2' sx={{ mt: 1 }}>
              {stat.value}
            </Typography>
          </SectionCard>
        ))}
      </Box>
      <SectionCard noPadding>
        <Tabs
          value={status}
          onChange={(_, value: string) => {
            setStatus(value);
            setPage(0);
          }}
          variant='scrollable'
          scrollButtons='auto'
          aria-label='Filter orders by status'
          sx={{ px: 1, borderBottom: '1px solid', borderColor: 'divider' }}
        >
          {['All orders', 'Paid', 'Pending', 'Refunded'].map((value) => (
            <Tab
              key={value}
              value={value}
              label={`${value} (${orders.filter((order) => value === 'All orders' || order.status === value).length})`}
            />
          ))}
        </Tabs>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}

          sx={{ justifyContent: 'space-between', alignItems: { xs: 'stretch', sm: 'center' }, p: 2.5, gap: 2 }}
        >
          <SearchField
            value={query}
            onChange={(value) => {
              setQuery(value);
              setPage(0);
            }}
            placeholder='Search orders…'
          />
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {filtered.length} orders
          </Typography>
        </Stack>
        <OrdersTable orders={filtered.slice(page * pageSize, (page + 1) * pageSize)} onOpen={setSelected} />
        <TablePagination
          component='div'
          count={filtered.length}
          page={page}
          onPageChange={(_, value) => setPage(value)}
          rowsPerPage={pageSize}
          onRowsPerPageChange={(event) => {
            setPageSize(Number(event.target.value));
            setPage(0);
          }}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </SectionCard>
      <OrderDetail order={selected} onClose={() => setSelected(null)} />
    </>
  );
}
