import { Order } from '../../../../../hooks/api/use-orders/types';
import { Box, Chip, Dialog, DialogContent, DialogTitle, Divider, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { OrderDetailsProductsList } from '../order-details-products-list/OrderDetailsProductsList';

interface Props {
  order: Order;
  open: boolean;
  onClose: () => void;
}

const OrderDetailsRow = ({ label, value }: { label: string; value: ReactNode }) => {
  return (
    <Box marginBottom={1}>
      <Stack sx={{ marginBottom: 1 }} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography fontSize={'subtitle2.fontSize'}>{label}</Typography>
        <Typography>{value}</Typography>
      </Stack>
      <Divider />
    </Box>
  );
};

export const OrderDetails = ({ order, open, onClose }: Props) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={'sm'} fullWidth>
      <DialogTitle>Order Details</DialogTitle>
      <DialogContent>
        <OrderDetailsRow label={'Customer'} value={order.customer} />
        <OrderDetailsRow label={'Status'} value={<Chip label={order.status} />} />
        <OrderDetailsRow label={'Total'} value={order.total} />
        <OrderDetailsRow label={'Date'} value={order.date} />
        <Typography mt={2} mb={2} variant={'h6'} component={'h4'}>
          Products
        </Typography>
        <OrderDetailsProductsList products={order.items} />
      </DialogContent>
    </Dialog>
  );
};
