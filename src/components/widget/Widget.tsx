import { WidgetContainer, WidgetTitle, WidgetTitleContainer } from './styled';
import { ReactNode } from 'react';
import { Box, BoxProps, Paper } from '@mui/material';

export interface WidgetProps {
  title: string;
  children?: ReactNode;
  sx?: BoxProps['sx'];
  contentHeight?: string;
}

export const Widget = ({ title, children, sx, contentHeight }: WidgetProps) => {
  return (
    <WidgetContainer sx={sx} component={Paper}>
      <WidgetTitleContainer>
        <WidgetTitle>{title}</WidgetTitle>
      </WidgetTitleContainer>
      <Box sx={{ flexGrow: 1, height: contentHeight }}>
        <Box height={'100%'}>{children}</Box>
      </Box>
    </WidgetContainer>
  );
};
