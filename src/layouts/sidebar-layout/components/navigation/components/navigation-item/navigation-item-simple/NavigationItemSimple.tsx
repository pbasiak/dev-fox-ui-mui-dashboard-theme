import ListItemText from '@mui/material/ListItemText';
import { useCallback } from 'react';
import { NavigationItemIconProps, NavigationItemSimpleType } from '../types';
import { listItemPrimaryTypographyProps } from '../../../constants/listItemProps';
import { NavigationListItemButton, NavigationListItemIcon } from '../styled';
import { useNavigate } from 'react-router-dom';

interface Props extends NavigationItemSimpleType {
  iconColor?: NavigationItemIconProps['color'];
  nested?: boolean;
}

export const NavigationItemSimple = (item: Props) => {
  const location = window.location.pathname;
  const navigate = useNavigate();
  const isActive = location === item.path;
  const handleClick = useCallback(() => {
    navigate(item.path);
  }, [item.path, navigate]);

  const iconProps: NavigationItemIconProps = {
    fontSize: item.nested ? 'small' : 'medium',
  }

  return (
    <NavigationListItemButton nested={item.nested} onClick={handleClick} active={isActive}>
      {!item.nested ?
        <NavigationListItemIcon>
          {item.icon(iconProps)}
        </NavigationListItemIcon> : null}

      <ListItemText primary={item.label} primaryTypographyProps={listItemPrimaryTypographyProps} />
    </NavigationListItemButton>
  );
}