import { Button, Card, CardContent, CardHeader, Container, Grid, ListItem, Stack } from '@mui/material';
import { PageHeader } from '../../../components/page-header/PageHeader.tsx';
import { useOrder } from '../../../hooks/api/use-order/useOrder.ts';
import { OrderProducts } from './components/order-products/OrderProducts.tsx';
import List from '@mui/material/List';
import { CreditCard, DeliveryDining, Edit, Person, Remove, ShoppingBasket } from '@mui/icons-material';
import { OrderRowDetail } from './components/order-row-detail/OrderRowDetail.tsx';

export const OrderDetails = () => {
  const { data, isLoading } = useOrder();

  if (isLoading || !data) {
    return null;
  }

  return (
    <Container>
      <PageHeader
        title={`Order details: ${data.id}`}
        breadcrumbs={['Orders', 'Details']}
        renderRight={
          <Stack direction={'row'} spacing={2}>
            <Button variant={'outlined'} color={'error'} startIcon={<Remove />}>
              Remove
            </Button>
            <Button variant={'contained'} startIcon={<Edit />}>
              Edit
            </Button>
          </Stack>
        }
      />
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={4} display={'flex'}>
          <Card sx={{ flex: 1 }}>
            <CardHeader
              title={
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                  <Person /> Customer details
                </Stack>
              }
            />
            <CardContent>
              <List>
                <ListItem>
                  <OrderRowDetail label={'Name'} value={data.customer.name} />
                </ListItem>
                <ListItem>
                  <OrderRowDetail label={'Email'} value={data.customer.email} />
                </ListItem>
                <ListItem>
                  <OrderRowDetail label={'Phone'} value={data.customer.phone} />
                </ListItem>
                <ListItem>
                  <OrderRowDetail
                    label={'Address'}
                    value={`${data.customer.address.street}, ${data.customer.address.city}, ${data.customer.address.state}, 
                  ${data.customer.address.zip}, ${data.customer.address.country}`}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} display={'flex'} flex={1}>
          <Card sx={{ flex: 1 }}>
            <CardHeader
              title={
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                  <CreditCard /> Payment
                </Stack>
              }
            />
            <CardContent>
              <List>
                <ListItem>
                  <OrderRowDetail label={'Method'} value={data.payment_method} />
                </ListItem>
                <ListItem>
                  <OrderRowDetail label={'Total'} value={data.total} />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} display={'flex'}>
          <Card sx={{ flex: 1 }}>
            <CardHeader
              title={
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                  <DeliveryDining /> Delivery
                </Stack>
              }
            />
            <CardContent>
              <List>
                <ListItem>
                  <OrderRowDetail label={'Status'} value={data.status} />
                </ListItem>
                <ListItem>
                  <OrderRowDetail label={'Carrier'} value={data.delivery.carrier} />
                </ListItem>
                <ListItem>
                  <OrderRowDetail label={'Tracking number'} value={data.delivery.tracking_number} />
                </ListItem>
                <ListItem>
                  <OrderRowDetail label={'Estimated delivery date'} value={data.delivery.estimated_delivery_date} />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Card>
            <CardHeader
              title={
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                  <ShoppingBasket /> Products
                </Stack>
              }
            />
            <CardContent>
              <OrderProducts products={data.products} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} gap={3} display={'flex'} direction={'column'}></Grid>
      </Grid>
    </Container>
  );
};
