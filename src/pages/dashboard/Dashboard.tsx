import { SidebarLayout } from '../../layouts/sidebar-layout/SidebarLayout';
import { Grid } from '@mui/material';
import { StatWidget } from './components/stat-widget/StatWidget';
import { Analytics } from '@mui/icons-material';

export const Dashboard = () => {
  return (
    <SidebarLayout>
      <Grid container spacing={2}>
        <StatWidget columns={4} title={'Total Active users'} icon={<Analytics color={'primary'} fontSize={'medium'} />} value={'25 152'} />
        <StatWidget columns={4} title={'Total sales'} icon={<Analytics color={'primary'} fontSize={'medium'} />} value={'1 521'} />
        <StatWidget columns={4} title={'Total posts'} icon={<Analytics color={'primary'} fontSize={'medium'} />} value={'126'} />
      </Grid>
    </SidebarLayout>
  )
}