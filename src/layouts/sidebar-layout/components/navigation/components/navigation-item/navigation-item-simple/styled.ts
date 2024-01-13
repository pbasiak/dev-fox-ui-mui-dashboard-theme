import { styled } from '@mui/material/styles';
import { Badge } from '@mui/material';

export const NavigationItemBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    display: 'flex',
    position: 'relative',
    transform: 'none',
  }
}))