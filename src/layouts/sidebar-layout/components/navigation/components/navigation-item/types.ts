import React from 'react';
import { SvgIconProps } from '@mui/material';

type NavigationItemIconColor = 'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning';

export type NavigationItemIconProps = SvgIconProps;

interface NavigationItemIcon {
  icon: (props: NavigationItemIconProps) => React.ReactElement;
}
export interface NavigationItemBaseType {
  label: string;
  active?: boolean;
  disabled?: boolean;
  description?: string;
}

export interface NavigationItemSimpleType extends NavigationItemBaseType, NavigationItemIcon {
  path: string;
  badgeText?: string | number;
  badgeColor?: NavigationItemIconColor;
  external?: boolean;
}

export type NavigationItemSimpleTypeWithoutIcon = Omit<NavigationItemSimpleType, 'icon'>;

export interface NavigationItemNestedType extends NavigationItemBaseType, NavigationItemIcon {
  items: NavigationItemSimpleTypeWithoutIcon[];
}

export interface NavigationItemHeaderType {
  header: string;
}

export type NavigationItemType = NavigationItemSimpleType | NavigationItemNestedType | NavigationItemHeaderType;
