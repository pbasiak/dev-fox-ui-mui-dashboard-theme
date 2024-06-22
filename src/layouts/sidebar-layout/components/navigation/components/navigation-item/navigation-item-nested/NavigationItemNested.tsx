import ListItemText from '@mui/material/ListItemText';
import { NavigationItemNestedType } from '../types';
import { listItemPrimaryTypographyProps } from '../../../constants/listItemProps';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { NavigationItemSimple } from '../navigation-item-simple/NavigationItemSimple';
import { NavigationListItemButton, NavigationListItemIcon } from '../styled';
import { useCallback } from 'react';
import { useAppNavigation } from '../../../hooks/use-app-navigation/useAppNavigation';
import { Stack, Typography } from '@mui/material';

interface Props {
  item: NavigationItemNestedType;
}

export const NavigationItemNested = ({ item }: Props) => {
  const { getIsOpen, toggleNavigationId } = useAppNavigation();
  const isOpen = getIsOpen(item.label);

  const handleToggleOpen = useCallback(() => {
    toggleNavigationId(item.label);
  }, [item.label, toggleNavigationId]);

  const nestedItems = item.items.map((item) => {
    return <NavigationItemSimple key={item.path} item={item} nested animateOn={isOpen} />;
  });

  return (
    <>
      <NavigationListItemButton onClick={handleToggleOpen} disabled={item.disabled}>
        <NavigationListItemIcon>{item.icon({})}</NavigationListItemIcon>
        <Stack flex={1}>
          <ListItemText
            primary={item.label}
            primaryTypographyProps={listItemPrimaryTypographyProps}
            sx={{ margin: 0 }}
          />
          {item?.description ? <Typography variant={'caption'}>{item.description}</Typography> : null}
        </Stack>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </NavigationListItemButton>
      <Collapse in={isOpen} timeout='auto' unmountOnExit>
        <List component='div'>{nestedItems}</List>
      </Collapse>
    </>
  );
};
