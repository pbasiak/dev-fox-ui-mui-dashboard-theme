import { ReactNode } from 'react';
import { Logo } from '../../components/logo/Logo';
import { Stack } from '@mui/material';

interface Props {
  children: ReactNode;
  hideLogo?: boolean;
}

export const FullWidthLayout = ({children, hideLogo = false}: Props) => {
  return (
    <div>
      {!hideLogo && (
        <Stack px={3} py={2}><Logo /></Stack>
      )}
      {children}
    </div>
  )
}