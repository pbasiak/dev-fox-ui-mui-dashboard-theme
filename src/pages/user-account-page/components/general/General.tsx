import {
  Avatar,
  Button,
  Card, CardActions,
  CardContent,
  CardHeader,
  FormControl, FormHelperText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Colors } from '../../../../theme/theme';
import { AccountFieldsNames, AccountGeneralForm, accountGeneralFormSchema } from '../../form';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUser } from '../../../../hooks/api/use-user/useUser';

export const General = () => {
  const { user } = useUser();

  const { register, handleSubmit, formState: { errors } } = useForm<AccountGeneralForm>({
    resolver: yupResolver(accountGeneralFormSchema),
    defaultValues: {
      [AccountFieldsNames.firstName]: user?.firstName,
      [AccountFieldsNames.lastName]: user?.lastName,
      [AccountFieldsNames.email]: user?.email,
      [AccountFieldsNames.phone]: user?.phone,
      [AccountFieldsNames.username]: user?.username,
    }
  });

  const handleSave = useCallback((data: AccountGeneralForm) => {
    console.log(data);
  }, [])

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <Stack direction={'row'} spacing={4}>
        <Card sx={{ padding: 2, maxWidth: '30%', width: '100%', borderRadius: 2 }} elevation={2}>
          <CardContent>
            <Stack direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'}>
              <Avatar src={user.image} sx={{ width: '128px', height: '128px', border: '5px solid #DDD' }} alt={user.username} />
              <Stack justifyContent={'center'}>
                <Typography textAlign={'center'} component={'p'} variant={'subtitle1'}>{user.firstName} {user.lastName}</Typography>
                <Typography textAlign={'center'} component={'p'} variant={'subtitle2'}>{user.username}</Typography>
              </Stack>
              <Typography textAlign={'center'} fontSize={12} color={Colors.textGray}>Allowed *.jpeg, *.jpg, *.png, *.gif <br/>max size of 5.0 MB</Typography>
              <Button size={'small'} variant={'contained'}>Upload new</Button>
              <Button color={'error'} size={'small'}>Remove picture</Button>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ padding: 2, flex: 1 }} elevation={2}>
          <CardHeader title={'Account'} subheader={'Basic account information'}  />
          <CardContent>
            <Stack spacing={4}>
              <Stack direction={'row'} spacing={4}>
                <FormControl fullWidth>
                  <TextField error={!!errors[AccountFieldsNames.firstName]} {...register(AccountFieldsNames.firstName)} label={'First name'} size={'small'}/>
                  {errors[AccountFieldsNames.firstName] ? <FormHelperText error>{errors[AccountFieldsNames.firstName].message}</FormHelperText> : null}
                </FormControl>
                <FormControl fullWidth>
                  <TextField error={!!errors[AccountFieldsNames.lastName]} {...register(AccountFieldsNames.lastName)} label={'Last name'} size={'small'}/>
                  {errors[AccountFieldsNames.lastName] ? <FormHelperText error>{errors[AccountFieldsNames.lastName].message}</FormHelperText> : null}
                </FormControl>
              </Stack>
              <Stack direction={'row'} spacing={4}>
                <FormControl fullWidth>
                  <TextField error={!!errors[AccountFieldsNames.username]} {...register(AccountFieldsNames.username)} label={'Username'} size={'small'}/>
                  {errors[AccountFieldsNames.username] ? <FormHelperText error>{errors[AccountFieldsNames.username].message}</FormHelperText> : null}
                </FormControl>
                <FormControl fullWidth>
                  <TextField error={!!errors[AccountFieldsNames.email]} {...register(AccountFieldsNames.email)} label={'Email'} size={'small'}/>
                  {errors[AccountFieldsNames.email] ? <FormHelperText error>{errors[AccountFieldsNames.email].message}</FormHelperText> : null}
                </FormControl>
              </Stack>
              <Stack direction={'row'} spacing={4}>
                <FormControl fullWidth>
                  <TextField type={'date'} error={!!errors[AccountFieldsNames.birthDate]} {...register(AccountFieldsNames.birthDate)} label={'Birth date'} size={'small'}/>
                  {errors[AccountFieldsNames.birthDate] ? <FormHelperText error>{errors[AccountFieldsNames.birthDate].message}</FormHelperText> : null}
                </FormControl>
                <FormControl fullWidth>
                  <TextField error={!!errors[AccountFieldsNames.age]} {...register(AccountFieldsNames.age)} label={'Age'} size={'small'}/>
                  {errors[AccountFieldsNames.age] ? <FormHelperText error>{errors[AccountFieldsNames.age].message}</FormHelperText> : null}
                </FormControl>
              </Stack>
            </Stack>
          </CardContent>

          <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type={'submit'} variant={'contained'}>Save changes</Button>
          </CardActions>
        </Card>
      </Stack>
    </form>
  )
}