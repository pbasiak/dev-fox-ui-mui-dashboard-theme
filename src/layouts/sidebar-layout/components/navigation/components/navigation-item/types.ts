import React from 'react';
import { SvgIconProps } from '@mui/material';

export type NavigationItemIconProps = SvgIconProps;
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

export interface NavigationItemHeaderType {
  header: string;
}

export type NavigationItemType = NavigationItemSimpleType | NavigationItemNestedType | NavigationItemHeaderType;

