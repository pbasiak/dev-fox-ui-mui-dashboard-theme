import { NavigationItemType } from './types';
import { NavigationItemSimple } from './navigation-item-simple/NavigationItemSimple';
import { NavigationItemNested } from './navigation-item-nested/NavigationItemNested';

export const NavigationItem = (item: NavigationItemType) => {
  const isSimple = 'path' in item;

  return isSimple ? (<NavigationItemSimple {...item} />) : <NavigationItemNested {...item} />
}