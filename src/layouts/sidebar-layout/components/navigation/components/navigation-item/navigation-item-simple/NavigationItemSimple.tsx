import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { useCallback } from 'react';
import { NavigationItemIconProps, NavigationItemSimpleType } from '../types';
import { listItemPrimaryTypographyProps } from '../../../constants/listItemProps';

interface Props extends NavigationItemSimpleType {
  iconColor?: NavigationItemIconProps['color'];
  nested?: boolean;
}

export const NavigationItemSimple = (item: Props) => {
  const handleClick = useCallback(() => {
    console.log(item?.path);
  }, [item]);

  const iconProps: NavigationItemIconProps = {
    color: item?.iconColor || item?.active ? 'primary' : 'action',
  }

  return (
    <ListItemButton onClick={handleClick} sx={{ paddingLeft: item.nested ? 4 : 2 }}>
      <ListItemIcon>
        {item.icon(iconProps)}
      </ListItemIcon>
      <ListItemText primary={item.label} primaryTypographyProps={listItemPrimaryTypographyProps} />
    </ListItemButton>
  );
}