import { Order } from '../../../../../hooks/api/use-orders/types';
import ListItemButton from '@mui/material/ListItemButton';
import { Box, Chip, ListItemIcon, Menu, MenuItem } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { OrderDetails } from '../order-details/OrderDetails';
import { useCallback, useState, MouseEvent } from 'react';
import { MoreVert } from '@mui/icons-material';

interface Props {
  order: Order;
  onSelect: (id: string) => void;
  selected: boolean;
}

export const OrderItem = ({ order, onSelect, selected }: Props) => {
  const [openDetails, setOpenDetails] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = useCallback((event: MouseEvent<HTMLLIElement>, id: string) => {
    event.stopPropagation();
    console.log(id);
  }, []);

  const handleEdit = useCallback((event: MouseEvent<HTMLLIElement>, id: string) => {
    event.stopPropagation();
    console.log(id);
  }, []);

  const labelId = `checkbox-list-label-${order.id}`;

  return (
    <>
      <ListItemButton key={order.id} dense onClick={() => setOpenDetails(true)}>
        <ListItemIcon>
          <Checkbox
            edge='start'
            tabIndex={-1}
            inputProps={{ 'aria-labelledby': labelId }}
            checked={selected}
            onClick={(e) => e.stopPropagation()}
            onChange={() => onSelect(order.id)}
          />
        </ListItemIcon>
        <ListItemText sx={{ flex: '1 1 40%' }} primary={order.customer.name} />
        <ListItemText sx={{ flex: '1 1 20%' }} primary={order.total} />
        <ListItemText sx={{ flex: '1 1 20%' }} primary={order.payment_method} />
        <ListItemText sx={{ flex: '1 1 20%' }}>
          <Chip label={order.status} />
        </ListItemText>
        <Box>
          <IconButton
            id='product-button'
            aria-controls={open ? 'product-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreVert />
          </IconButton>
        </Box>
      </ListItemButton>
      <Menu
        id='product-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'product-button',
        }}
      >
        <MenuItem onClick={(event) => handleEdit(event, order.id)}>Edit</MenuItem>
        <MenuItem onClick={(event) => handleDelete(event, order.id)}>Delete</MenuItem>
      </Menu>
      {openDetails && <OrderDetails order={order} open={openDetails} onClose={() => setOpenDetails(false)} />}
    </>
  );
};
