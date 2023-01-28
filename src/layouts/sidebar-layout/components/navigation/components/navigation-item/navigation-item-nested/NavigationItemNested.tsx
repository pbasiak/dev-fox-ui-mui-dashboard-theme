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

interface Props extends NavigationItemNestedType {
  iconColor?: NavigationItemIconProps['color'];
  nested?: boolean;
}

export const NavigationItemNested = (item: Props) => {
  const [open, setOpen] = React.useState(true);

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  const iconProps: NavigationItemIconProps = {
    color: item?.iconColor || item?.active ? 'primary' : 'action',
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
        {open ? <ExpandLess /> : <ExpandMore />}
      </NavigationListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {nestedItems}
        </List>
      </Collapse>
    </>
  );
}