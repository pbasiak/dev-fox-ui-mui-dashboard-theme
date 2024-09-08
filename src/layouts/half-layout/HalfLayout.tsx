import { Grid } from '@mui/material';
import { FullWidthLayout } from '../full-width-layout/FullWidthLayout';
import { Children } from 'react';

interface Props {
  children: React.ReactNode[];
}

export const HalfLayout = ({ children }: Props) => {
  const count = Children.count(children);

  if (count !== 2) {
    throw new Error('HalfLayout must have exactly 2 children');
  }

  return (
    <FullWidthLayout hideLogo>
      <Grid container sx={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          md={6}
          padding={2}
          sx={{
            backgroundColor: 'primary.dark',
            color: 'primary.contrastText',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children[0]}
        </Grid>
        <Grid item xs={12} md={6} padding={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {children[1]}
        </Grid>
      </Grid>
    </FullWidthLayout>
  );
};
