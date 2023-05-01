import { ReactNode } from 'react';
import { Logo } from '../../components/logo/Logo';
import { Stack } from '@mui/material';

interface Props {
  children: ReactNode;
}

export const FullWidthLayout = ({children}: Props) => {
  return (
    <div>
      <Stack px={3} py={2}><Logo /></Stack>
      {children}
    </div>
  )
}