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
        fontWeight: 'fontWeightBold',
        pl: 2.2,
        color: 'text.secondary',
        backgroundColor: 'transparent',
        position: 'relative',
        letterSpacing: '1px',
      }}
    >
      {header}
    </ListSubheader>
  );
};
