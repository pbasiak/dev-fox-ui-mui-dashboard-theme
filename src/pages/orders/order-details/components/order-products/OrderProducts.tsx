import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Product } from '../../../../../hooks/api/use-orders/types.ts';

function createData(id: string, name: string, price: number, quantity: number) {
  return { id, name, price, quantity };
}

interface Props {
  products: Product[];
}

export const OrderProducts = ({ products }: Props) => {
  const rows = products.map((product) => createData(product.product_id, product.name, product.price, product.quantity));

  return (
    <TableContainer component={Paper}>
      <Table size='small' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>SKU</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align='right'>Price</TableCell>
            <TableCell align='right'>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align='right'>{row.price}</TableCell>
              <TableCell align='right'>{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
