import { useCallback } from 'react';
import { NavigationItemIconProps, NavigationItemSimpleType, NavigationItemSimpleTypeWithoutIcon } from '../types';
import { listItemPrimaryTypographyProps } from '../../../constants/listItemProps';
import { NavigationListItemButton, NavigationListItemIcon, NavigationListItemNestedIcon } from '../styled';
import { useNavigate } from 'react-router-dom';
import { NavigationItemBadge } from './styled';
import { Stack, ListItemText } from '@mui/material';
import { Launch, Circle } from '@mui/icons-material';

interface Props {
  iconColor?: NavigationItemIconProps['color'];
  nested?: boolean;
  item: NavigationItemSimpleType | NavigationItemSimpleTypeWithoutIcon;
}

export const NavigationItemSimple = ({ item, nested = false }: Props) => {
  const location = window.location.pathname;
  const navigate = useNavigate();
  const isActive = location === item.path;
  const handleClick = useCallback(() => {
    navigate(item.path);
  }, [item.path, navigate]);

  const iconProps: NavigationItemIconProps = {
    fontSize: nested ? 'small' : 'medium',
  };

  const shouldDisplayBadge = Boolean(item?.badgeText) && !item?.external;
  const shouldDisplayLaunchIcon = item?.external && !shouldDisplayBadge;

  return (
    <NavigationListItemButton nested={nested} onClick={handleClick} active={isActive}>
      <Stack direction={'row'} flex={1} alignItems={'center'} overflow={'hidden'}>
        {!nested && 'icon' in item ? (
          <NavigationListItemIcon>{item.icon(iconProps)}</NavigationListItemIcon>
        ) : (
          <NavigationListItemNestedIcon>
            <Circle fontSize={'inherit'} />
          </NavigationListItemNestedIcon>
        )}

        <ListItemText primary={item.label} primaryTypographyProps={listItemPrimaryTypographyProps} />
      </Stack>
      <Stack direction={'row'} alignItems={'center'} spacing={1}>
        {shouldDisplayLaunchIcon ? <Launch /> : null}
        {shouldDisplayBadge ? (
          <NavigationItemBadge
            badgeContent={item.badgeText}
            sx={{ display: 'flex' }}
            color={item?.badgeColor ? item.badgeColor : 'default'}
          />
        ) : null}
      </Stack>
    </NavigationListItemButton>
  );
};
