import ListItemText from '@mui/material/ListItemText';
import { useCallback } from 'react';
import { NavigationItemIconProps, NavigationItemSimpleType } from '../types';
import { listItemPrimaryTypographyProps } from '../../../constants/listItemProps';
import { NavigationListItemButton, NavigationListItemIcon } from '../styled';

interface Props extends NavigationItemSimpleType {
  iconColor?: NavigationItemIconProps['color'];
  nested?: boolean;
}

export const NavigationItemSimple = (item: Props) => {
  const handleClick = useCallback(() => {
    console.log(item?.path);
  }, [item]);

  const iconProps: NavigationItemIconProps = {
    // color: item?.iconColor || item?.active ? 'primary' : 'action',
    // sx: { color: Colors.sidebarIconColor, '&:hover': {color: Colors.sidebarIconColorHover} },
  }

  return (
    <NavigationListItemButton onClick={handleClick} sx={{ paddingLeft: item.nested ? 4 : 2 }}>
      <NavigationListItemIcon>
        {item.icon(iconProps)}
      </NavigationListItemIcon>
      <ListItemText primary={item.label} primaryTypographyProps={listItemPrimaryTypographyProps} />
    </NavigationListItemButton>
  );
}