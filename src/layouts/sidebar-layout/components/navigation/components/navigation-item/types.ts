import React from 'react';
import { SvgIconProps } from '@mui/material';

export interface NavigationItemIconProps {
  color: SvgIconProps['color'];
}
export interface NavigationItemBaseType {
  label: string;
  icon: (props: any) => React.ReactElement;
  active?: boolean;
}

export interface NavigationItemSimpleType extends NavigationItemBaseType {
  path: string;
}

export interface NavigationItemNestedType extends NavigationItemBaseType {
  items: NavigationItemSimpleType[];
}

export type NavigationItemType = NavigationItemSimpleType | NavigationItemNestedType;

