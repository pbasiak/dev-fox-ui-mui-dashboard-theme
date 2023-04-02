import { SidebarLayout } from '../../layouts/sidebar-layout/SidebarLayout';
import { Grid } from '@mui/material';
import { StatWidget } from './components/stat-widget/StatWidget';
import { Analytics } from '@mui/icons-material';
import { WelcomeWidget } from './components/welcome-widget/WelcomeWidget';

export const Dashboard = () => {
  return (
    <SidebarLayout>
      <Grid container spacing={2}>
        <Grid container item xs={12} md={12} spacing={2}>
          <Grid item xs={8} display={'flex'} >
            <WelcomeWidget title={'Welcome'} description={'This is an example sentence to welcome a user'} />
          </Grid>
          <Grid item xs={4}>
            <StatWidget title={'Total Active users'} icon={<Analytics color={'primary'} fontSize={'medium'} />} value={'25 152'} />
          </Grid>
        </Grid>

        <Grid container item xs={12} md={12} spacing={2}>
          <Grid item xs={4}>
            <StatWidget title={'Total Active users'} icon={<Analytics color={'primary'} fontSize={'medium'} />} value={'25 152'} />
          </Grid>

          <Grid item xs={4}>
            <StatWidget title={'Total sales'} icon={<Analytics color={'primary'} fontSize={'medium'} />} value={'1 521'} />
          </Grid>

          <Grid item xs={4}>
            <StatWidget title={'Total posts'} icon={<Analytics color={'primary'} fontSize={'medium'} />} value={'126'} />
          </Grid>
        </Grid>
      </Grid>
    </SidebarLayout>
  )
}