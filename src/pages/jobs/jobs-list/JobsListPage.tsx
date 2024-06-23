import { useCallback } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, List, Container, Stack, Chip, Pagination, Button } from '@mui/material';
import { useJobs } from '../../../hooks/api/use-jobs/useJobs';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { JobsSearch } from './components/jobs-search/JobsSearch';
import { routes } from '../../../contants/routes';
import { useNavigate } from 'react-router-dom';
import { PostAdd } from '@mui/icons-material';

const CardWrapper = styled(Card)(({ theme }) => ({
  marginBottom: 10,
  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.shadows[15],
    backgroundColor: theme.palette.grey[50],
  },
}));

export default function JobsList() {
  const { data } = useJobs();
  const navigate = useNavigate();

  const handleJobClick = useCallback(() => {
    navigate(routes.jobsDetails);
  }, [navigate]);

  if (!data) {
    return null;
  }

  const jobsTagsList = ({ tags }: { tags: string[] }) => {
    return tags.map((tag, index) => <Chip key={`${tag}_${index}`} label={tag} size={'small'} variant={'filled'} />);
  };

  return (
    <Container maxWidth={'lg'}>
      <PageHeader
        title={'Jobs'}
        breadcrumbs={['Jobs', 'List']}
        renderRight={
          <Button variant={'contained'} startIcon={<PostAdd />}>
            Create
          </Button>
        }
      />
      <JobsSearch />
      <List sx={{ marginTop: 2 }}>
        {data.jobs.map((job) => (
          <CardWrapper key={job.title} onClick={handleJobClick}>
            <CardContent>
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Stack>
                  <Typography variant='h6' component={'h2'}>
                    {job.title}
                  </Typography>
                  <Typography variant='subtitle1' component={'h3'}>
                    {job.company} - {job.location}
                  </Typography>
                </Stack>
                <Typography fontWeight={'fontWeightMedium'} variant='subtitle1'>
                  {job.salary}
                </Typography>
              </Stack>
              <Stack mt={1} direction={'row'} spacing={1}>
                {jobsTagsList({ tags: job.tags })}
              </Stack>
            </CardContent>
          </CardWrapper>
        ))}
      </List>

      <Stack alignItems={'center'}>
        <Pagination count={10} variant='outlined' shape='rounded' />
      </Stack>
    </Container>
  );
}
