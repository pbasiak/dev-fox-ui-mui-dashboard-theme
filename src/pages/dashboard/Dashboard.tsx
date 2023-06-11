import { SidebarLayout } from '../../layouts/sidebar-layout/SidebarLayout';
import { Grid, Typography } from '@mui/material';
import { StatWidget } from './components/stat-widget/StatWidget';
import { WelcomeWidget } from './components/welcome-widget/WelcomeWidget';
import { PageHeader } from '../../components/page-header/PageHeader';
import { SalesWidget } from './components/sales-widget/SalesWidget';

export const Dashboard = () => {
  return (
    <SidebarLayout>
      <PageHeader title={'Dashboard'} />
      <Grid container spacing={2}>
        <Grid container item xs={12} md={12} spacing={2}>
          <Grid item xs={8} display={'flex'} >
            <WelcomeWidget title={'Welcome'} description={'This is an example sentence to welcome a user'} />
          </Grid>
          <Grid item xs={4}>
            <StatWidget title={'Total Active users'} value={'25 152'} />
          </Grid>
        </Grid>

        <Grid container item xs={12} md={12} spacing={2}>
          <Grid item xs={4}>
            <StatWidget title={'Total Active users'} value={'25 152'} />
          </Grid>

          <Grid item xs={4}>
            <StatWidget title={'Total sales'} value={'1 521'} />
          </Grid>

          <Grid item xs={4}>
            <StatWidget title={'Total posts'} value={'126'} />
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} spacing={2} mt={2}>
          <Typography variant={'h5'} component={'p'} fontWeight={'fontWeightBold'}>
            Sales summary
          </Typography>
        </Grid>
        <Grid container item xs={12} md={12} spacing={2}>
          <Grid item xs={4}>
            <SalesWidget />
          </Grid>

          <Grid item xs={4}>
            <SalesWidget />
          </Grid>

          <Grid item xs={4}>
            <SalesWidget />
          </Grid>
        </Grid>
      </Grid>
    </SidebarLayout>
  )
}