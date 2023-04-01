import { WidgetContainer, WidgetTitle, WidgetTitleContainer } from './styled';
import { Grid } from '@mui/material';
import { ReactNode } from 'react';

export interface WidgetProps {
  title: string;
  children?: ReactNode;
  columns?: 3 | 4 | 6 | 9 | 12;
}

export const Widget = ({ title, children, columns = 3 }: WidgetProps) => {
  return (
    <Grid item xs={columns}>
      <WidgetContainer>
        <WidgetTitleContainer>
          <WidgetTitle>{title}</WidgetTitle>
        </WidgetTitleContainer>
        <div>
          {children}
        </div>
      </WidgetContainer>
    </Grid>
  );
};
