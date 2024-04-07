import { WidgetContainer, WidgetTitle, WidgetTitleContainer } from './styled';
import { ReactNode } from 'react';
import { Box, Paper } from '@mui/material';

export interface WidgetProps {
  title: string;
  children?: ReactNode;
  sx?: any;
}

export const Widget = ({ title, children, sx }: WidgetProps) => {
  return (
    <WidgetContainer sx={sx} component={Paper}>
      <WidgetTitleContainer>
        <WidgetTitle>{title}</WidgetTitle>
      </WidgetTitleContainer>
      <Box sx={{ flex: 1, height: '100%' }}>
        {children}
      </Box>
    </WidgetContainer>
  );
};
