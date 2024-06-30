import { Button, Container, Stack } from '@mui/material';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { useCallback, useRef } from 'react';
import { JobsForm } from '../../../widgets/jobs/jobs-form/JobsForm.tsx';
import { useJobsDetails } from '../../../hooks/api/use-jobs-details/useJobsDetails.ts';
import { Save } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../contants/routes.ts';
import { JobsFormSchema } from '../../../widgets/jobs/jobs-form/formSchema.ts';

export default function JobsEdit() {
  const { data } = useJobsDetails();
  const formRef = useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();

  const handleCreatePost = useCallback((data: JobsFormSchema) => {
    console.log(data);
  }, []);

  const handlePublish = () => {
    formRef.current && formRef.current?.requestSubmit();
    console.log('Publish');
  };

  const defaultValues: JobsFormSchema = {
    title: data.title,
    company: data.company,
    location: data.location,
    description: data.description,
    requirements: data.requirements,
    tags: data.tags,
    salary: data.salary,
  };

  return (
    <Container>
      <PageHeader
        title={data.title}
        breadcrumbs={['Jobs', 'Edit']}
        renderRight={
          <Stack direction={'row'} justifyContent={'flex-end'} spacing={2}>
            <Button variant={'outlined'} color={'secondary'} onClick={() => navigate(routes.jobsList)}>
              Cancel
            </Button>
            <Button startIcon={<Save />} variant={'contained'} onClick={handlePublish}>
              Save
            </Button>
          </Stack>
        }
      />

      <JobsForm formRef={formRef} onSubmit={handleCreatePost} defaultValues={defaultValues} />
    </Container>
  );
}
