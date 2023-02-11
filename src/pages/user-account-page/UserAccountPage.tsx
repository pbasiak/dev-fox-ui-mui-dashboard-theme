import { SidebarLayout } from '../../layouts/sidebar-layout/SidebarLayout';

import { useUser } from '../../hooks/api/use-user/useUser';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container, FormControl, FormHelperText,
  Stack,
  Tab,
  TabProps,
  Tabs, TextField, Typography,
} from '@mui/material';
import { PageHeader } from '../../components/page-header/PageHeader';
import React, { useCallback } from 'react';
import { Link, Person, Settings } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import { AccountFieldsNames, AccountFormValues, accountSchema } from './form';
import { useForm } from 'react-hook-form';

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
        <Box marginTop={4}>
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
      [AccountFieldsNames.email]: user?.email,
      [AccountFieldsNames.phone]: user?.phone,
      [AccountFieldsNames.username]: user?.username,
    }
  });

  const handleSave = useCallback((data: AccountFormValues) => {
    console.log(data);
  }, [])

  return (
    <SidebarLayout>
      <Container maxWidth='lg'>
        <PageHeader title={'User account'} breadcrumbs={['User', 'Account']} />
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab {...tabProps} icon={<Person />} label="General" {...a11yProps(0)} />
              <Tab {...tabProps} icon={<Link />} label="Social links" {...a11yProps(1)} />
              <Tab {...tabProps} icon={<Settings />} label="Settings" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <form onSubmit={handleSubmit(handleSave)}>
              <Stack direction={'row'} spacing={4}>
                <Card sx={{ padding: 2, maxWidth: '30%', width: '100%' }}>
                  <CardContent>
                    <Stack direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'}>
                      <Avatar src={user.image} sx={{ width: '128px', height: '128px', border: '5px solid #DDD' }} alt={user.username} />
                      <Stack justifyContent={'center'}>
                        <Typography textAlign={'center'} component={'p'} variant={'subtitle1'}>{user.firstName} {user.lastName}</Typography>
                        <Typography textAlign={'center'} component={'p'} variant={'subtitle2'}>{user.username}</Typography>
                      </Stack>
                      <Button size={'small'} variant={'contained'}>Upload new</Button>
                      <Button color={'error'} size={'small'}>Remove picture</Button>
                    </Stack>
                  </CardContent>
                </Card>
                <Card sx={{ padding: 2, flex: 1 }}>
                  <CardHeader title={'Account'} subheader={'Basic account information'}  />
                  <CardContent>
                    <Stack spacing={4}>
                      <Stack direction={'row'} spacing={4}>
                        <FormControl fullWidth>
                          <TextField error={!!errors[AccountFieldsNames.firstName]} {...register(AccountFieldsNames.firstName)} label={'First name'} size={'small'}/>
                          {errors[AccountFieldsNames.firstName] ? <FormHelperText error>{errors[AccountFieldsNames.firstName].message}</FormHelperText> : null}
                        </FormControl>
                        <FormControl fullWidth>
                          <TextField error={!!errors[AccountFieldsNames.lastName]} {...register(AccountFieldsNames.lastName)} label={'Last name'} size={'small'}/>
                          {errors[AccountFieldsNames.lastName] ? <FormHelperText error>{errors[AccountFieldsNames.lastName].message}</FormHelperText> : null}
                        </FormControl>
                      </Stack>
                      <Stack direction={'row'} spacing={4}>
                        <FormControl fullWidth>
                          <TextField error={!!errors[AccountFieldsNames.username]} {...register(AccountFieldsNames.username)} label={'Username'} size={'small'}/>
                          {errors[AccountFieldsNames.username] ? <FormHelperText error>{errors[AccountFieldsNames.username].message}</FormHelperText> : null}
                        </FormControl>
                        <FormControl fullWidth>
                          <TextField error={!!errors[AccountFieldsNames.email]} {...register(AccountFieldsNames.email)} label={'Email'} size={'small'}/>
                          {errors[AccountFieldsNames.email] ? <FormHelperText error>{errors[AccountFieldsNames.email].message}</FormHelperText> : null}
                        </FormControl>
                      </Stack>
                      <Stack direction={'row'} spacing={4}>
                        <FormControl fullWidth>
                          <TextField error={!!errors[AccountFieldsNames.birthDate]} {...register(AccountFieldsNames.birthDate)} label={'Birth date'} size={'small'}/>
                          {errors[AccountFieldsNames.birthDate] ? <FormHelperText error>{errors[AccountFieldsNames.birthDate].message}</FormHelperText> : null}
                        </FormControl>
                        <FormControl fullWidth>
                          <TextField error={!!errors[AccountFieldsNames.age]} {...register(AccountFieldsNames.age)} label={'Age'} size={'small'}/>
                          {errors[AccountFieldsNames.age] ? <FormHelperText error>{errors[AccountFieldsNames.age].message}</FormHelperText> : null}
                        </FormControl>
                      </Stack>
                    </Stack>
                  </CardContent>

                  <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}><Button variant={'contained'}>Save changes</Button></CardActions>
                </Card>
              </Stack>
            </form>
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