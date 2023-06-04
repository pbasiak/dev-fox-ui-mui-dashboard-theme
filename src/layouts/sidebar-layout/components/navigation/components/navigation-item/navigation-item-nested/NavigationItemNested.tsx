import ListItemText from '@mui/material/ListItemText';
import { NavigationItemIconProps, NavigationItemNestedType } from '../types';
import { listItemPrimaryTypographyProps } from '../../../constants/listItemProps';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import * as React from 'react';
import { NavigationItemSimple } from '../navigation-item-simple/NavigationItemSimple';
import { NavigationListItemButton, NavigationListItemIcon } from '../styled';
import { useCallback } from 'react';
import { useNavigation } from '../../../hooks/use-navigation/useNavigation';

interface Props {
  item: NavigationItemNestedType;
}

export const NavigationItemNested = ({ item }: Props) => {
  const { getIsOpen, toggleNavigationId } = useNavigation();
  const isOpen = getIsOpen(item.label);

  const handleToggleOpen = useCallback(() => {
    toggleNavigationId(item.label);
  }, [item.label, toggleNavigationId]);

  const iconProps: NavigationItemIconProps = {
    color: item?.active ? 'primary' : 'action',
  }

  const nestedItems = item.items.map((item) => {
    return <NavigationItemSimple {...item} nested />
  })

  return  (
    <>
      <NavigationListItemButton onClick={handleToggleOpen} >
        <NavigationListItemIcon>
          {item.icon(iconProps)}
        </NavigationListItemIcon>
        <ListItemText primary={item.label} primaryTypographyProps={listItemPrimaryTypographyProps} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </NavigationListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {nestedItems}
        </List>
      </Collapse>
    </>
  );
}