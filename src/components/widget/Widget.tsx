import { WidgetContainer, WidgetTitle, WidgetTitleContainer } from './styled';
import { ReactNode } from 'react';
import { Box } from '@mui/material';

export interface WidgetProps {
  title: string;
  children?: ReactNode;
  sx?: any;
}

export const Widget = ({ title, children, sx }: WidgetProps) => {
  return (
    <WidgetContainer sx={sx}>
      <WidgetTitleContainer>
        <WidgetTitle>{title}</WidgetTitle>
      </WidgetTitleContainer>
      <Box sx={{ flex: 1, height: '100%' }}>
        {children}
      </Box>
    </WidgetContainer>
  );
};
