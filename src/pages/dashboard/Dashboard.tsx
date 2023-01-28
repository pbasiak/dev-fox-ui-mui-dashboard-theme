import { SidebarLayout } from '../../layouts/sidebar-layout/SidebarLayout';
import { Widget } from '../../components/widget/Widget';
import { Grid } from '@mui/material';

export const Dashboard = () => {
  return (
    <SidebarLayout>
      <h1>Dashboard</h1>
      <Grid container spacing={2}>
        <Widget title={'Total funds'} />
      </Grid>
    </SidebarLayout>
  )
}