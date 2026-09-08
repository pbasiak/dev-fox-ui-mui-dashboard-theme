import {
  Avatar,
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { StatusChip } from '../../components/status-chip';
import { currency, initials, dateLabel } from '../../lib/format';
import type { Order } from './data';
import { EmptyState } from '../../components/empty-state';
export function OrdersTable({
  orders,
  onOpen,
  compact = false,
}: {
  orders: Order[];
  onOpen: (order: Order) => void;
  compact?: boolean;
}) {
  return (
    <TableContainer>
      <Table aria-label='Orders' sx={{ minWidth: compact ? 580 : 760 }}>
        <TableHead>
          <TableRow>
            <TableCell>Order</TableCell>
            <TableCell>Customer</TableCell>
            {!compact && <TableCell>Product</TableCell>}
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align='right'>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow hover key={order.id}>
              <TableCell>
                <Button size='small' onClick={() => onOpen(order)} sx={{ minWidth: 0, p: 0, fontSize: 11.5 }}>
                  #{order.id}
                </Button>
              </TableCell>
              <TableCell>
                <Stack direction='row' sx={{ alignItems: 'center', gap: 1.2 }}>
                  <Avatar sx={{ width: 30, height: 30, fontSize: 10 }}>{initials(order.customer)}</Avatar>
                  <Box>
                    <Typography variant='body2' sx={{ fontWeight: 550, fontSize: 11.5 }}>
                      {order.customer}
                    </Typography>
                    {!compact && (
                      <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                        {order.email}
                      </Typography>
                    )}
                  </Box>
                </Stack>
              </TableCell>
              {!compact && <TableCell>{order.product}</TableCell>}
              <TableCell sx={{ fontSize: 11, whiteSpace: 'nowrap', color: 'text.secondary' }}>
                {dateLabel(order.date)}
              </TableCell>
              <TableCell>
                <StatusChip status={order.status} />
              </TableCell>
              <TableCell align='right' sx={{ fontWeight: 600, fontSize: 12 }}>
                {currency(order.amount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!orders.length && <EmptyState />}
    </TableContainer>
  );
}
