import { Box, Container, Tab, TabProps, Tabs } from '@mui/material';
import { PageHeader } from '../../../components/page-header/PageHeader';
import React from 'react';
import { Person, Settings, Share } from '@mui/icons-material';
import { SocialLinksForm } from '../components/social-links-form/SocialLinksForm';
import { AccountSettingsForm } from '../components/account-settings-form/AccountSettingsForm';
import { UserForm } from '../components/user-form/UserForm';
import { useCurrentUser } from '../../../hooks/api/use-current-user/useCurrentUser';
import { Loader } from '../../../components/loader/Loader';

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
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box marginTop={4}>{children}</Box>}
    </div>
  );
}

export default function UserAccountPage() {
  const [value, setValue] = React.useState(0);
  const { data: user, isLoading } = useCurrentUser();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabProps: TabProps = {
    sx: { minHeight: 42, textTransform: 'capitalize' },
    iconPosition: 'start',
  };

  console.log(user);

  const defaultValues = user
    ? {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        username: user.username,
        image: user.image,
        age: user.age,
        birthDate: user.birthDate,
      }
    : undefined;

  if (isLoading || !user) return <Loader />;

  return (
    <Container maxWidth='lg'>
      <PageHeader title={'User account'} breadcrumbs={['User', 'Account']} />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
            <Tab {...tabProps} icon={<Person />} label='General' {...a11yProps(0)} />
            <Tab {...tabProps} icon={<Share />} label='Social links' {...a11yProps(1)} />
            <Tab {...tabProps} icon={<Settings />} label='Settings' {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <UserForm defaultValues={defaultValues} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SocialLinksForm />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AccountSettingsForm />
        </TabPanel>
      </Box>
    </Container>
  );
}
