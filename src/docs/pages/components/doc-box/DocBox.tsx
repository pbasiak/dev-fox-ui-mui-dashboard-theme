import { Box, Typography } from '@mui/material';
import React from 'react';

interface DocBoxProps {
  children: React.ReactNode;
  title: string;
}

export const DocBox = ({ children, title }: DocBoxProps) => {
  return (
    <Box>
      <Typography variant={'h6'} marginBottom={1}>
        {title}
      </Typography>
      <Box sx={{ border: `1px solid #DDD`, padding: 2, borderRadius: `4px` }}>{children}</Box>
    </Box>
  );
};
