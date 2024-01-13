import { SidebarLayout } from '../../../layouts/sidebar-layout/SidebarLayout';
import { Button, Container, FormControl, Paper, Stack, TextField } from '@mui/material';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { useCallback, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { JobsCreateFieldsNames, JobsCreateForm, jobsCreateFormSchema } from './utils/jobsCreateForm';
import { BlogPostFieldsNames } from '../../blog/create-post-blog-page/utils/blogPostForms';
import { FieldErrorText } from '../../../components/field-error-text/FieldErrorText';

export const JobsCreate = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { register, handleSubmit, formState: { errors }, control } = useForm<JobsCreateForm>({
    resolver: yupResolver(jobsCreateFormSchema),
  });

  const handleCreatePost = useCallback((data: JobsCreateForm) => {
    console.log(data);
  }, []);

  const handlePublish = () => {
    formRef.current && formRef.current.requestSubmit();
    console.log('Publish');
  }

  return (
    <SidebarLayout>
      <Container>
        <PageHeader title={'Create Job'} breadcrumbs={['Jobs', 'Create']} renderRight={
          <Stack direction={'row'} justifyContent={'flex-end'} spacing={2}>
            <Button variant={'outlined'}>Cancel</Button>
            <Button variant={'contained'} onClick={handlePublish}>Publish</Button>
          </Stack>
        } />

        <form ref={formRef} onSubmit={handleSubmit(handleCreatePost)}>
          <Paper sx={{ padding: 4 }}>
            <Stack spacing={2}>
              <FormControl fullWidth>
                <TextField label={'Title'} {...register(JobsCreateFieldsNames.title)} />
                {errors.title && <FieldErrorText>{errors.title.message}</FieldErrorText>}
              </FormControl>
              <FormControl fullWidth>
                <TextField label={'Company'} {...register(JobsCreateFieldsNames.company)} />
                {errors.company && <FieldErrorText>{errors.company.message}</FieldErrorText>}
              </FormControl>
              <FormControl fullWidth>
                <TextField label={'Location'} {...register(JobsCreateFieldsNames.location)} />
                {errors.location && <FieldErrorText>{errors.location.message}</FieldErrorText>}
              </FormControl>
              <Controller
                render={({ field, fieldState, formState, }) => (
                  <>
                    {fieldState.error && <FieldErrorText>{fieldState.error.message}</FieldErrorText>}
                  </>
                )}
                name={BlogPostFieldsNames.description}
                control={control}
              />
              <FormControl fullWidth>
                <TextField label={'Requirements'} {...register(JobsCreateFieldsNames.requirements)} />
                {errors.requirements && <FieldErrorText>{errors.requirements.message}</FieldErrorText>}
              </FormControl>
              <FormControl fullWidth>
                <TextField label={'Tags'} {...register(JobsCreateFieldsNames.tags)} />
                {errors.tags && <FieldErrorText>{errors.tags.message}</FieldErrorText>}
              </FormControl>
              <FormControl fullWidth>
                <TextField label={'Salary'} {...register(JobsCreateFieldsNames.salary)} />
                {errors.salary && <FieldErrorText>{errors.salary.message}</FieldErrorText>}
              </FormControl>
            </Stack>
          </Paper>
        </form>
      </Container>
    </SidebarLayout>
  )
}