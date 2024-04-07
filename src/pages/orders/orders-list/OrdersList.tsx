import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Box, Container, ListItem, ListItemIcon, Pagination, Paper, Stack } from '@mui/material';
import { SidebarLayout } from '../../../layouts/sidebar-layout/SidebarLayout';
import { useOrders } from '../../../hooks/api/use-orders/useOrders';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { FC, useCallback, useState } from 'react';
import { OrderItem } from './components/order-item/OrderItem';

const OrderListWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

export const OrderList: FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const { data, isLoading } = useOrders();

  const handleGlobalSelect = useCallback(() => {
    if (selected.length === data?.orders.length) {
      setSelected([])
    } else {
      setSelected(data?.orders.map((order) => order.id) || [])
    }
  }, [data?.orders, selected.length]);

  const handleToggleSelect = useCallback((id: string) => {
    if (selected.indexOf(id) === -1) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((selectedId) => selectedId !== id));
    }
  }, [selected]);

  const ordersList = data?.orders.map((order) => {
    return (
      <OrderItem key={order.id} order={order} onSelect={handleToggleSelect} selected={selected.indexOf(order.id) !== -1} />
    )
  });

  return (
    <SidebarLayout>
      <Container>
        <PageHeader title={'Orders'} breadcrumbs={['Orders']} />
        <Box component={Paper}>
          <List sx={{ marginBottom: 1, px: 2, pr: 11, borderBottom: `1px solid`, borderColor: 'divider' }}>
            <ListItem dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  onChange={handleGlobalSelect}
                  checked={selected.length === data?.orders.length}
                />
              </ListItemIcon>
              <ListItemText sx={{ flex: '1 1 40%' }} primaryTypographyProps={{ fontWeight: 'fontWeightMedium' }} id={'All'} primary={'Customer'} />
              <ListItemText sx={{ flex: '1 1 20%' }} primaryTypographyProps={{ fontWeight: 'fontWeightMedium' }} id={'All'} primary={'Total'} />
              <ListItemText sx={{ flex: '1 1 20%' }} primaryTypographyProps={{ fontWeight: 'fontWeightMedium' }} id={'All'} primary={'Date'} />
              <ListItemText sx={{ flex: '1 1 20%' }} primaryTypographyProps={{ fontWeight: 'fontWeightMedium' }} id={'All'} primary={'Status'} />
              <ListItemText sx={{ flex: '1 1 20%' }} primaryTypographyProps={{ fontWeight: 'fontWeightMedium' }} id={'All'} primary={'Actions'} />
            </ListItem>
          </List>
          {data?.orders && !isLoading ? <OrderListWrapper>
            <List>
              {ordersList}
            </List>
            <Stack direction={'row'} justifyContent={'center'} p={1}>
              <Pagination count={data.totalPages} variant="outlined" shape="rounded" />
            </Stack>
          </OrderListWrapper> : null}
        </Box>
      </Container>
    </SidebarLayout>
  );
};
