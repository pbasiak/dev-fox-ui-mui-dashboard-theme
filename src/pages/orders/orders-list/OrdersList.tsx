import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {
  Box,
  Container,
  ListItem,
  ListItemIcon,
  Pagination,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  TextField,
  Badge,
} from '@mui/material';
import { useOrders } from '../../../hooks/api/use-orders/useOrders';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { FC, useCallback, useState } from 'react';
import { OrderItem } from './components/order-item/OrderItem';
import { OrderStatus } from '../../../hooks/api/use-orders/types.ts';
import { useOrdersCount } from '../../../hooks/api/use-orders-count/useOrdersCount.ts';
import { IcecreamRounded } from '@mui/icons-material';

const OrderListWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: theme.shape.borderRadius,
}));

export const OrderList: FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [statusSelected, setStatusSelected] = useState<OrderStatus | 'All'>('All');
  const [searchValue, setSearchValue] = useState<string>('');
  const { data, isLoading } = useOrders({ status: statusSelected, customer: searchValue });
  const { data: ordersCount } = useOrdersCount();

  const handleGlobalSelect = useCallback(() => {
    if (selected.length === data?.orders.length) {
      setSelected([]);
    } else {
      setSelected(data?.orders.map((order) => order.id) || []);
    }
  }, [data?.orders, selected.length]);

  const handleToggleSelect = useCallback(
    (id: string) => {
      if (selected.indexOf(id) === -1) {
        setSelected([...selected, id]);
      } else {
        setSelected(selected.filter((selectedId) => selectedId !== id));
      }
    },
    [selected],
  );

  const handleStatusTabChange = useCallback((_event: React.ChangeEvent<object>, newValue: string) => {
    setStatusSelected(newValue as OrderStatus | 'All');
  }, []);

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  const ordersList = data?.orders.map((order) => {
    return (
      <OrderItem
        key={order.id}
        order={order}
        onSelect={handleToggleSelect}
        selected={selected.indexOf(order.id) !== -1}
      />
    );
  });

  const tabsList = Object.values(OrderStatus).map((status) => {
    return (
      <Tab
        label={status}
        value={status}
        icon={<Badge badgeContent={<>{ordersCount?.[status]}</>} color={'primary'} />}
        iconPosition={'end'}
        sx={{ display: 'flex', gap: 1, px: 2 }}
      />
    );
  });

  return (
    <Container>
      <PageHeader title={'Orders'} breadcrumbs={['Orders']} />
      <Box component={Paper}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={statusSelected} onChange={handleStatusTabChange} aria-label='basic tabs example'>
            {tabsList}
          </Tabs>
        </Box>
        <Box>
          <Stack p={2} direction='row' justifyContent='space-between'>
            <TextField placeholder={'Search orders...'} size='small' onChange={handleSearchChange} />

            <Typography fontWeight='fontWeightBold' display={'flex'} alignItems={'center'}>
              20 results found
            </Typography>
          </Stack>
        </Box>
        <List sx={{ marginBottom: 1, pr: 11, borderBottom: `1px solid`, borderColor: 'divider' }}>
          <ListItem dense>
            <ListItemIcon>
              <Checkbox
                edge='start'
                tabIndex={-1}
                onChange={handleGlobalSelect}
                disabled={data?.orders.length === 0}
                checked={selected.length === data?.orders.length && data?.orders.length !== 0}
              />
            </ListItemIcon>
            <ListItemText
              sx={{ flex: '1 1 40%' }}
              primaryTypographyProps={{ fontWeight: 'fontWeightMedium' }}
              id={'All'}
              primary={'Customer'}
            />
            <ListItemText
              sx={{ flex: '1 1 20%' }}
              primaryTypographyProps={{ fontWeight: 'fontWeightMedium' }}
              id={'All'}
              primary={'Total'}
            />
            <ListItemText
              sx={{ flex: '1 1 20%' }}
              primaryTypographyProps={{ fontWeight: 'fontWeightMedium' }}
              id={'All'}
              primary={'Status'}
            />
            <ListItemText
              sx={{ flex: '1 1 20%' }}
              primaryTypographyProps={{ fontWeight: 'fontWeightMedium' }}
              id={'All'}
              primary={'Actions'}
            />
          </ListItem>
        </List>
        {data?.orders.length === 0 && !isLoading ? (
          <Box sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant={'body1'}>No orders found</Typography>
          </Box>
        ) : null}
        {data?.orders && !isLoading ? (
          <OrderListWrapper>
            <List>{ordersList}</List>
            <Stack direction={'row'} justifyContent={'center'} p={1}>
              <Pagination count={data.totalPages} variant='outlined' shape='rounded' />
            </Stack>
          </OrderListWrapper>
        ) : null}
      </Box>
    </Container>
  );
};
