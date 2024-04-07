import { ReactNode } from 'react';
import { Logo } from '../../components/logo/Logo';
import { Box, Paper, Stack } from '@mui/material';

interface Props {
  children: ReactNode;
  hideLogo?: boolean;
}

export const FullWidthLayout = ({ children, hideLogo = false }: Props) => {
  return (
    <Box>
      {!hideLogo && (
        <Paper>
          <Stack px={3} py={2}>
            <Logo />
          </Stack>
        </Paper>
      )}
      {children}
    </Box>
  );
};
