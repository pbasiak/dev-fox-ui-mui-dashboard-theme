import { WidgetContainer, WidgetTitle, WidgetTitleContainer } from './styled';
import { Grid, Typography } from '@mui/material';

export interface WidgetProps {
  title: string;
}

export const Widget = ({ title }: WidgetProps) => {
  return (
    <Grid item xs={4}>
      <WidgetContainer>
        <WidgetTitleContainer>
          <WidgetTitle>{title}</WidgetTitle>
        </WidgetTitleContainer>
        <Typography>Content</Typography>
      </WidgetContainer>
    </Grid>
  );
};
