import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormControl, Paper, Stack, TextField } from '@mui/material';
import { FieldErrorText } from '../../../components/field-error-text/FieldErrorText.tsx';
import { SlateEditor } from '../../../components/slate-editor/SlateEditor.tsx';
import { JobsFormSchema, JobsFormFieldsNames, jobsFormSchema } from './formSchema.ts';

interface JobsFormProps {
  defaultValues?: JobsFormSchema;
  formRef?: React.MutableRefObject<HTMLFormElement | null>;
  onSubmit: (data: JobsFormSchema) => void;
}

export const JobsForm = ({ defaultValues, formRef, onSubmit }: JobsFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<JobsFormSchema>({
    resolver: yupResolver(jobsFormSchema),
    defaultValues,
  });

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <Paper sx={{ padding: 4 }}>
        <Stack spacing={2}>
          <FormControl fullWidth>
            <TextField label={'Title'} {...register(JobsFormFieldsNames.title)} />
            {errors.title && <FieldErrorText>{errors.title.message}</FieldErrorText>}
          </FormControl>
          <FormControl fullWidth>
            <TextField label={'Company'} {...register(JobsFormFieldsNames.company)} />
            {errors.company && <FieldErrorText>{errors.company.message}</FieldErrorText>}
          </FormControl>
          <FormControl fullWidth>
            <TextField label={'Location'} {...register(JobsFormFieldsNames.location)} />
            {errors.location && <FieldErrorText>{errors.location.message}</FieldErrorText>}
          </FormControl>
          <Controller
            render={({ fieldState, field }) => (
              <>
                <SlateEditor onChange={field.onChange} placeholder={'Description'} />
                {fieldState.error && <FieldErrorText>{fieldState.error.message}</FieldErrorText>}
              </>
            )}
            name={JobsFormFieldsNames.description}
            control={control}
          />
          <FormControl fullWidth>
            <TextField label={'Requirements'} {...register(JobsFormFieldsNames.requirements)} />
            {errors.requirements && <FieldErrorText>{errors.requirements.message}</FieldErrorText>}
          </FormControl>
          <FormControl fullWidth>
            <TextField label={'Tags'} {...register(JobsFormFieldsNames.tags)} />
            {errors.tags && <FieldErrorText>{errors.tags.message}</FieldErrorText>}
          </FormControl>
          <FormControl fullWidth>
            <TextField label={'Salary'} {...register(JobsFormFieldsNames.salary)} />
            {errors.salary && <FieldErrorText>{errors.salary.message}</FieldErrorText>}
          </FormControl>
        </Stack>
      </Paper>
    </form>
  );
};
