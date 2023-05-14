import { Colors } from '../../../../../../../theme/theme';
import { ListSubheader } from '@mui/material';

interface NavigationItemHeaderProps {
  header: string;
}

export const NavigationItemHeader = ({ header }: NavigationItemHeaderProps) => {
  return (
    <ListSubheader
      component="div"
      id="nested-list-subheader"
      sx={{
        textTransform: 'uppercase',
        fontSize: '11px',
        fontWeight: 'bold',
        pl: 2.2,
        color: Colors.sidebarTextColor,
        backgroundColor: 'transparent',
        position: 'relative',
      }}
    >
      {header}
    </ListSubheader>
  );
};
