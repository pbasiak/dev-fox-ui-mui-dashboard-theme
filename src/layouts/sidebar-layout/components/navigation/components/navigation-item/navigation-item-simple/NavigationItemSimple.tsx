import { useCallback } from 'react';
import { NavigationItemIconProps, NavigationItemSimpleType, NavigationItemSimpleTypeWithoutIcon } from '../types';
import { listItemPrimaryTypographyProps } from '../../../constants/listItemProps';
import { NavigationListItemButton, NavigationListItemIcon, NavigationListItemNestedIcon } from '../styled';
import { useNavigate } from 'react-router-dom';
import { NavigationItemBadge } from './styled';
import { Stack, ListItemText, Typography } from '@mui/material';
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
      {!nested && 'icon' in item ? (
        <NavigationListItemIcon>{item.icon(iconProps)}</NavigationListItemIcon>
      ) : (
        <NavigationListItemNestedIcon>
          <Circle fontSize={'inherit'} />
        </NavigationListItemNestedIcon>
      )}
      <Stack
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        textOverflow={'ellipsis'}
        whiteSpace={'nowrap'}
        minWidth={0}
        overflow={'hidden'}
        flex={1}
      >
        <ListItemText
          primary={item.label}
          primaryTypographyProps={listItemPrimaryTypographyProps}
          sx={{ margin: 0, minWidth: 0, maxWidth: '100%' }}
        />
        {item?.description ? (
          <Typography
            variant={'caption'}
            overflow={'hidden'}
            textOverflow={'ellipsis'}
            whiteSpace={'nowrap'}
            maxWidth={'100%'}
          >
            {item.description}
          </Typography>
        ) : null}
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
