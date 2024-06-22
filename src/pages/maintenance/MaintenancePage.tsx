import { FullWidthLayout } from '../../layouts/full-width-layout/FullWidthLayout';
import { Button, Typography } from '@mui/material';
import { CenterLayout } from '../../layouts/center-layout/CenterLayout';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../contants/routes';

export default function MaintenancePage() {
  const navigate = useNavigate();

  return (
    <FullWidthLayout>
      <CenterLayout>
        <Typography variant='h1' fontWeight={'fontWeightBold'}>
          Under construction
        </Typography>
        <Typography variant='subtitle1'>Page is under maintenance mode.</Typography>
        <Typography variant='subtitle1' marginBottom={4}>
          Please try it again later.
        </Typography>
        <Button variant={'contained'} size={'large'} onClick={() => navigate(routes.dashboard)}>
          Go to main page
        </Button>
      </CenterLayout>
    </FullWidthLayout>
  );
}
