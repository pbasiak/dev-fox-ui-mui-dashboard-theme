import { Button, Typography } from '@mui/material';
import { PageNotFoundContainer } from './styled';

export const PageNotFound = () => {
  return (
    <PageNotFoundContainer>
      <Typography variant="h1" fontWeight={'fontWeightBold'}>404</Typography>
      <Typography variant="subtitle1" marginBottom={2}>Page not found</Typography>
      <Button variant={'contained'} size={'large'}>Go to main page</Button>
    </PageNotFoundContainer>
  );
}