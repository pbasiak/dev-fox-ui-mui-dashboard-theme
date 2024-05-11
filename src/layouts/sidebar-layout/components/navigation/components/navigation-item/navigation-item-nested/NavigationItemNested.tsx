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
import { useNavigation } from '../../../hooks/use-navigation/useNavigation';
import { Stack, Typography } from '@mui/material';

interface Props {
  item: NavigationItemNestedType;
}

export const NavigationItemNested = ({ item }: Props) => {
  const { getIsOpen, toggleNavigationId } = useNavigation();
  const isOpen = getIsOpen(item.label);

  const handleToggleOpen = useCallback(() => {
    toggleNavigationId(item.label);
  }, [item.label, toggleNavigationId]);

  const nestedItems = item.items.map((item) => {
    return <NavigationItemSimple key={item.path} item={item} nested />;
  });

  return (
    <>
      <NavigationListItemButton onClick={handleToggleOpen}>
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
        <List component='div' disablePadding sx={{ marginLeft: 2 }}>
          {nestedItems}
        </List>
      </Collapse>
    </>
  );
};
