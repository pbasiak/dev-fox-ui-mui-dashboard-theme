import { NavigationItemType } from './types';
import { NavigationItemSimple } from './navigation-item-simple/NavigationItemSimple';
import { NavigationItemNested } from './navigation-item-nested/NavigationItemNested';
import { NavigationItemHeader } from './navigation-item-header/NavigationItemHeader';

export const NavigationItem = (item: NavigationItemType) => {
  const isSimple = 'path' in item;
  const isHeader = 'header' in item;

  if (isHeader) {
    return <NavigationItemHeader header={item.header} />
  }

  return isSimple ? (<NavigationItemSimple {...item} />) : <NavigationItemNested {...item} />
}