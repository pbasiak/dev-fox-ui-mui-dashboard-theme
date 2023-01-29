import { PageHeaderTitle } from './styled';
import { Breadcrumbs, Stack, Typography } from '@mui/material';

interface PageHeaderProps {
  title: string;
  breadcrumbs?: string[];
}

export const PageHeader = ({title, breadcrumbs}: PageHeaderProps) => {
  const breadcrumbsList = breadcrumbs?.map((breadcrumb) => <Typography key="3" color="text.primary" fontSize={14}>{breadcrumb}</Typography>);

  return (
    <Stack spacing={2} marginBottom={2}>
      <PageHeaderTitle>{title}</PageHeaderTitle>
      { breadcrumbs ?
        <Breadcrumbs separator="-" aria-label="breadcrumb">
          {breadcrumbsList}
        </Breadcrumbs> : null }
    </Stack>
  );
};
