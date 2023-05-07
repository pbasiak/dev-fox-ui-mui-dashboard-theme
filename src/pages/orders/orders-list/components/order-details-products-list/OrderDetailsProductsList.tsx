import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { OrderItem } from '../../../../../hooks/api/use-orders/types';

interface Props {
  products: OrderItem[];
}

export const OrderDetailsProductsList = ({ products }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="products list">
        <TableHead>
          <TableRow>
            <TableCell sx={{ pl: 0 }}>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{ pl: 0 }} component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}