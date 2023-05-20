import { useCallback } from 'react';
import { NavigationItemIconProps, NavigationItemSimpleType } from '../types';
import { listItemPrimaryTypographyProps } from '../../../constants/listItemProps';
import { NavigationListItemButton, NavigationListItemIcon } from '../styled';
import { useNavigate } from 'react-router-dom';
import { NavigationItemBadge } from './styled';
import { Stack, ListItemText } from '@mui/material';
import { Launch } from '@mui/icons-material';

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

  const shouldDisplayBadge = Boolean(item?.badgeText) && !item?.external;
  const shouldDisplayLaunchIcon = item?.external && !shouldDisplayBadge;

  return (
    <NavigationListItemButton nested={item.nested} onClick={handleClick} active={isActive}>
      <Stack direction={'row'} flex={1} alignItems={'center'} overflow={'hidden'}>
        {!item.nested ?
          <NavigationListItemIcon>
            {item.icon(iconProps)}
          </NavigationListItemIcon> : null}

        <ListItemText primary={item.label} primaryTypographyProps={listItemPrimaryTypographyProps} />
        {/* TODO: fix long text issue */}
      </Stack>
      <Stack direction={'row'} alignItems={'center'} spacing={1}>
        {shouldDisplayLaunchIcon ? <Launch /> : null}
        {shouldDisplayBadge ? <NavigationItemBadge badgeContent={item.badgeText} sx={{ display: 'flex' }} color={item?.badgeColor ? item.badgeColor : 'default'} /> : null }
      </Stack>
    </NavigationListItemButton>
  );
}