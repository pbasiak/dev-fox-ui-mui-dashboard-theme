import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import type { Order } from './data';
import { StatusChip } from '../../components/status-chip';
import { currency, dateLabel, downloadCsv } from '../../lib/format';
export function OrderDetail({ order, onClose }: { order: Order | null; onClose: () => void }) {
  return (
    <Dialog open={Boolean(order)} onClose={onClose} maxWidth='sm' fullWidth aria-labelledby='order-title'>
      {order && (
        <>
          <DialogTitle id='order-title'>
            <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              Order #{order.id}
              <StatusChip status={order.status} />
            </Stack>
          </DialogTitle>
          <DialogContent>
            <Typography sx={{ color: 'text.secondary', mb: 3 }}>Placed {dateLabel(order.date)}</Typography>
            <Box sx={{ bgcolor: 'action.hover', borderRadius: '8px', p: 2.5 }}>
              <Typography variant='overline' sx={{ color: 'text.secondary' }}>
                Customer
              </Typography>
              <Typography sx={{ fontWeight: 600 }}>{order.customer}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{order.email}</Typography>
            </Box>
            <Stack direction='row' sx={{ justifyContent: 'space-between', py: 3 }}>
              <Typography>{order.product}</Typography>
              <Typography sx={{ fontWeight: 600 }}>{currency(order.amount)}</Typography>
            </Stack>
            <Divider />
            <Stack direction='row' sx={{ justifyContent: 'space-between', py: 2 }}>
              <Typography sx={{ fontWeight: 600 }}>Total</Typography>
              <Typography variant='h3'>{currency(order.amount)}</Typography>
            </Stack>
            <Typography variant='caption' sx={{ color: 'text.secondary' }}>
              This is a demo order. No payment has been processed.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Close</Button>
            <Button
              variant='contained'
              onClick={() =>
                downloadCsv(`${order.id}.csv`, [
                  ['Order', 'Customer', 'Product', 'Amount', 'Status'],
                  [order.id, order.customer, order.product, order.amount, order.status],
                ])
              }
            >
              Export order
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
