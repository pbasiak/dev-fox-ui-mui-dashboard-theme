import { PageHeaderTitle } from './styled';
import { Breadcrumbs, Stack, Typography } from '@mui/material';
import React from 'react';
import { APP_NAME } from '../../contants/appInfo';
import { Home } from '@mui/icons-material';

interface PageHeaderProps {
  title: string;
  breadcrumbs?: string[];
  renderRight?: React.ReactNode;
}

export const PageHeader = ({title, breadcrumbs, renderRight}: PageHeaderProps) => {
  const breadcrumbsList = breadcrumbs?.map((breadcrumb) => <Typography key="3" color="text.primary" fontSize={14}>{breadcrumb}</Typography>);

  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} marginBottom={2}>
      <Stack spacing={2} marginBottom={2}>
        <PageHeaderTitle variant={'h1'}>{title}</PageHeaderTitle>
        { breadcrumbs ?
          <Breadcrumbs separator="•" aria-label="breadcrumb">
            <Typography key="3" color="text.primary" fontSize={14} alignItems={'center'} display={'flex'}><Home fontSize={'inherit'} sx={{ marginRight: 0.5 }} color={'inherit'} /> {APP_NAME}</Typography>
            {breadcrumbsList}
          </Breadcrumbs> : null }
      </Stack>
      {renderRight ? <div>{renderRight}</div> : null}
    </Stack>
  );
};
