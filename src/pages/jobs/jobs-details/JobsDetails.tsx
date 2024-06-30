import { useJobsDetails } from '../../../hooks/api/use-jobs-details/useJobsDetails';
import {
  Container,
  ListItem,
  Typography,
  List,
  ListItemText,
  Paper,
  Chip,
  Stack,
  Button,
  Grid,
  Divider,
} from '@mui/material';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { FavoriteBorder, OpenInNew } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../contants/routes.ts';
import { SlateEditor } from '../../../components/slate-editor/SlateEditor.tsx';

export default function JobsDetails() {
  const { data: job } = useJobsDetails();
  const navigate = useNavigate();

  if (!job) {
    return null;
  }

  const jobsTagsList = job.tags.map((tag, index) => <Chip size={'small'} key={`${tag}_${index}`} label={tag} />);

  return (
    <Container>
      <PageHeader
        title={job.title}
        breadcrumbs={['Jobs', 'Details', job.title]}
        renderRight={
          <Stack direction={'row'} spacing={1}>
            <Button variant={'outlined'} color={'secondary'} onClick={() => navigate(routes.jobsEdit)}>
              Edit
            </Button>
            <Button color={'error'} variant={'outlined'}>
              Remove
            </Button>
            <Button variant={'outlined'} startIcon={<FavoriteBorder />}>
              Save
            </Button>
            <Button variant={'contained'} startIcon={<OpenInNew />}>
              Apply
            </Button>
          </Stack>
        }
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 4 }}>
            <Typography variant='h5' gutterBottom>
              Description
            </Typography>
            <Typography variant='body1' gutterBottom mb={2}>
              <SlateEditor readOnly={true} initialValue={job.description} />
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant='h5' gutterBottom>
              Requirements:
            </Typography>
            <List sx={{ listStyle: 'disc', pl: 5 }}>
              {job.requirements.map((requirement, index) => (
                <ListItem key={index} sx={{ display: 'list-item', pl: 1 }}>
                  <ListItemText primary={requirement} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 4 }}>
            <Typography variant='h6' gutterBottom>
              {job.salary}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant='subtitle1' gutterBottom>
              Company: <strong>{job.company}</strong>
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              Location: <strong>{job.location}</strong>
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Stack mt={2} mb={2} direction={'row'} flexWrap={'wrap'} gap={1}>
              {jobsTagsList}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
