import { FullWidthLayout } from '../../layouts/full-width-layout/FullWidthLayout';
import { Button, Typography } from '@mui/material';
import { CenterLayout } from '../../layouts/center-layout/CenterLayout';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../contants/routes';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <FullWidthLayout>
      <CenterLayout>
        <Typography variant='h1' fontWeight={'fontWeightBold'}>
          404
        </Typography>
        <Typography variant='subtitle1'>Page you are looking for is not found.</Typography>
        <Typography variant='subtitle1' marginBottom={4}>
          Check the address and try it again.
        </Typography>
        <Button variant={'contained'} size={'large'} onClick={() => navigate(routes.dashboard)}>
          Go to main page
        </Button>
      </CenterLayout>
    </FullWidthLayout>
  );
};
