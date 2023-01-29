import { SidebarLayout } from '../../layouts/sidebar-layout/SidebarLayout';

import { useUser } from '../../hooks/api/use-user/useUser';
import { Box, Button, Card, CardActions, CardContent, Container, Tab, TabProps, Tabs } from '@mui/material';
import { PageHeader } from '../../components/page-header/PageHeader';
import React, { useCallback } from 'react';
import { Link, Person, Settings } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import { AccountFieldsNames, AccountFormValues, accountSchema } from './form';
import { useForm } from 'react-hook-form';
import { FormTextField } from '../../components/form/form-text-field/FormTextField';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box marginTop={2}>
          {children}
        </Box>
      )}
    </div>
  );
}

export const UserAccountPage = () => {
  const { user } = useUser();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabProps: TabProps = {
    sx: { minHeight: 42, textTransform: 'capitalize' },
    iconPosition: 'start',
  }


  const { register, handleSubmit, formState: { errors } } = useForm<AccountFormValues>({
    resolver: yupResolver(accountSchema),
    defaultValues: {
      [AccountFieldsNames.firstName]: user?.firstName,
      [AccountFieldsNames.lastName]: user?.lastName,
    }
  });

  const handleSave = useCallback((data: AccountFormValues) => {
    console.log(data);
  }, [])

  return (
    <SidebarLayout>
      <Container maxWidth='md'>
        <PageHeader title={'User account'} breadcrumbs={['User', 'Account']} />
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab {...tabProps} icon={<Person />} label="Account" {...a11yProps(0)} />
              <Tab {...tabProps} icon={<Link />} label="Social links" {...a11yProps(1)} />
              <Tab {...tabProps} icon={<Settings />} label="Settings" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Card sx={{ padding: 3 }}>
              <form onSubmit={handleSubmit(handleSave)}>
                <CardContent>
                  <FormTextField<AccountFormValues> register={register} errors={errors} name={AccountFieldsNames.firstName} label={'First name'} />
                  <FormTextField<AccountFormValues> register={register} errors={errors} name={AccountFieldsNames.lastName} label={'Last name'} />
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}><Button variant={'contained'}>Save changes</Button></CardActions>
              </form>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </Container>
    </SidebarLayout>
  )
}