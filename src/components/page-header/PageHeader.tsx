import { PageHeaderTitle } from './styled';
import { Breadcrumbs, Stack, Typography } from '@mui/material';
import React from 'react';

interface PageHeaderProps {
  title: string;
  breadcrumbs?: string[];
  renderRight?: React.ReactNode;
}

export const PageHeader = ({title, breadcrumbs, renderRight}: PageHeaderProps) => {
  const breadcrumbsList = breadcrumbs?.map((breadcrumb) => <Typography key="3" color="text.primary" fontSize={14}>{breadcrumb}</Typography>);

  return (
    <Stack direction={'row'} alignItems={'flex-start'} justifyContent={'space-between'}>
      <Stack spacing={2} marginBottom={2}>
        <PageHeaderTitle>{title}</PageHeaderTitle>
        { breadcrumbs ?
          <Breadcrumbs separator="-" aria-label="breadcrumb">
            {breadcrumbsList}
          </Breadcrumbs> : null }
      </Stack>
      {renderRight ? <div>{renderRight}</div> : null}
    </Stack>
  );
};
