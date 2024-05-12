import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { AccountGeneralFieldsNames, AccountGeneralForm, accountGeneralFormSchema } from '../../utils/userForms';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserFormDefaultValues } from './types/userFormDefaultValues.ts';

interface Props {
  defaultValues?: UserFormDefaultValues;
  submitButtonText?: string;
}

export const UserForm = ({ defaultValues, submitButtonText = 'Save changes' }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<AccountGeneralForm>({
    resolver: yupResolver(accountGeneralFormSchema),
    defaultValues,
  });

  const userFormValues = getValues();

  const handleSave = useCallback((data: AccountGeneralForm) => {
    console.log(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ padding: 2, height: '100%' }} elevation={2}>
            <CardContent>
              <Stack direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'}>
                <Avatar
                  src={userFormValues.image}
                  sx={{ width: '128px', height: '128px', border: '5px solid #DDD' }}
                  alt={userFormValues.username}
                />
                <Stack justifyContent={'center'}>
                  <Typography textAlign={'center'} component={'p'} variant={'subtitle1'}>
                    {userFormValues.firstName} {userFormValues.lastName}
                  </Typography>
                  <Typography textAlign={'center'} component={'p'} variant={'subtitle2'}>
                    {userFormValues.username}
                  </Typography>
                </Stack>
                <Typography textAlign={'center'} fontSize={12} color={'text.secondary'}>
                  Allowed *.jpeg, *.jpg, *.png, *.gif <br />
                  max size of 5.0 MB
                </Typography>
                <Button size={'small'} variant={'contained'}>
                  Upload new
                </Button>
                <Button color={'error'} size={'small'}>
                  Remove picture
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card sx={{ padding: 2, flex: 1, height: '100%' }} elevation={2}>
            <CardHeader title={'Account'} subheader={'Basic account information'} />
            <CardContent>
              <Stack spacing={4}>
                <Stack direction={'row'} spacing={4}>
                  <FormControl fullWidth>
                    <TextField
                      error={!!errors[AccountGeneralFieldsNames.firstName]}
                      {...register(AccountGeneralFieldsNames.firstName)}
                      label={'First name'}
                      size={'medium'}
                    />
                    {errors[AccountGeneralFieldsNames.firstName] ? (
                      <FormHelperText error>{errors[AccountGeneralFieldsNames.firstName].message}</FormHelperText>
                    ) : null}
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField
                      error={!!errors[AccountGeneralFieldsNames.lastName]}
                      {...register(AccountGeneralFieldsNames.lastName)}
                      label={'Last name'}
                      size={'medium'}
                    />
                    {errors[AccountGeneralFieldsNames.lastName] ? (
                      <FormHelperText error>{errors[AccountGeneralFieldsNames.lastName].message}</FormHelperText>
                    ) : null}
                  </FormControl>
                </Stack>
                <Stack direction={'row'} spacing={4}>
                  <FormControl fullWidth>
                    <TextField
                      error={!!errors[AccountGeneralFieldsNames.username]}
                      {...register(AccountGeneralFieldsNames.username)}
                      label={'Username'}
                      size={'medium'}
                    />
                    {errors[AccountGeneralFieldsNames.username] ? (
                      <FormHelperText error>{errors[AccountGeneralFieldsNames.username].message}</FormHelperText>
                    ) : null}
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField
                      error={!!errors[AccountGeneralFieldsNames.email]}
                      {...register(AccountGeneralFieldsNames.email)}
                      label={'Email'}
                      size={'medium'}
                    />
                    {errors[AccountGeneralFieldsNames.email] ? (
                      <FormHelperText error>{errors[AccountGeneralFieldsNames.email].message}</FormHelperText>
                    ) : null}
                  </FormControl>
                </Stack>
                <Stack direction={'row'} spacing={4}>
                  <FormControl fullWidth>
                    <TextField
                      type={'date'}
                      error={!!errors[AccountGeneralFieldsNames.birthDate]}
                      {...register(AccountGeneralFieldsNames.birthDate)}
                      InputLabelProps={{ shrink: true }}
                      label={'Birth date'}
                      size={'medium'}
                    />
                    {errors[AccountGeneralFieldsNames.birthDate] ? (
                      <FormHelperText error>{errors[AccountGeneralFieldsNames.birthDate].message}</FormHelperText>
                    ) : null}
                  </FormControl>
                  <FormControl fullWidth>
                    <TextField
                      error={!!errors[AccountGeneralFieldsNames.age]}
                      {...register(AccountGeneralFieldsNames.age)}
                      label={'Age'}
                      size={'medium'}
                    />
                    {errors[AccountGeneralFieldsNames.age] ? (
                      <FormHelperText error>{errors[AccountGeneralFieldsNames.age].message}</FormHelperText>
                    ) : null}
                  </FormControl>
                </Stack>
              </Stack>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
              <Button type={'submit'} variant={'contained'}>
                {submitButtonText}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
};
