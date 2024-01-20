import { SidebarLayout } from '../../../layouts/sidebar-layout/SidebarLayout';
import {
  Accordion, AccordionDetails,
  AccordionSummary, Button, Checkbox,
  Container,
  FormControl, FormControlLabel, FormGroup,
  Grid,
  Paper,
  Stack, Switch,
  TextField,
  Typography,
} from '@mui/material';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { BlogPostFieldsNames, BlogPostForm, blogPostFormSchema } from './utils/blogPostForms';
import { useCallback, useRef } from 'react';
import { ExpandMore } from '@mui/icons-material';
import { routes } from '../../../contants/routes';
import { useNavigate } from 'react-router-dom';
import { SlateEditor } from '../../../components/slate-editor/SlateEditor.tsx';

export const CreatePostBlogPage = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const { register, handleSubmit, formState: { errors }, control } = useForm<BlogPostForm>({
    resolver: yupResolver(blogPostFormSchema),
  });

  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
    { id: 5, name: 'Category 5' },
  ];

  const categoriesList = categories.map((category) => (
    <FormGroup key={category.id} aria-label="position" row>
      <FormControlLabel control={<Checkbox />} label={category.name} />
    </FormGroup>
  ));

  const handleCreatePost = useCallback((data: BlogPostForm) => {
    console.log(data);
  }, []);

  const handlePublish = useCallback(() => {
    formRef.current && formRef.current.requestSubmit();
  }, []);

  return (
    <SidebarLayout>
      <Container maxWidth={'xl'}>
        <PageHeader title={'Create post'} breadcrumbs={['Blog', 'Create post']} renderRight={<Stack direction={'row'} justifyContent={'flex-end'} spacing={2}>
          <Button variant={'outlined'} onClick={() => navigate(routes.blog)}>Cancel</Button>
          <Button variant={'contained'} onClick={handlePublish}>Publish</Button>
        </Stack>} />

        <form ref={formRef} onSubmit={handleSubmit(handleCreatePost)}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Paper sx={{padding: 4}}>
                <Stack spacing={2}>
                  <FormControl fullWidth>
                    <TextField label={'Post title'} {...register(BlogPostFieldsNames.title)} />
                    {errors.title && <Typography color={'error'}>{errors.title.message}</Typography>}
                  </FormControl>

                  <FormControl fullWidth>
                    <TextField label={'Post description'} multiline {...register(BlogPostFieldsNames.description)} />
                    {errors.description && <Typography color={'error'}>{errors.description.message}</Typography>}
                  </FormControl>

                  <Controller
                    render={({ fieldState, field: { onChange } }) => (
                      <>
                        <SlateEditor onChange={onChange} placeholder={'Post content'} />
                        {fieldState.error && <Typography color={'error'}>{fieldState.error.message}</Typography>}
                      </>
                    )}
                    name={BlogPostFieldsNames.content}
                    control={control} />
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper>
                <Accordion defaultExpanded={true}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>General</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={2} justifyContent={'flex-start'}>
                      <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                          <FormControlLabel control={<Switch />} label={'Public post'} />
                        </FormGroup>
                        <FormGroup aria-label="position" row>
                          <FormControlLabel control={<Checkbox />} label={'Pin to the top'} />
                        </FormGroup>
                        <FormGroup aria-label="position" row>
                          <FormControlLabel control={<Checkbox />} label={'Waiting for the review'} />
                        </FormGroup>
                      </FormControl>

                    </Stack>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>Categories</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={2}>
                      <TextField placeholder={'Search categories'} size={'small'} />
                      <Stack>
                        {categoriesList}
                      </Stack>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Container>
    </SidebarLayout>
  );
}