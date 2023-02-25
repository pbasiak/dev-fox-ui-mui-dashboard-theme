import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormHelperText,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import {
  AccountSocialFieldsNames,
  AccountSocialLinksForm,
  accountSocialLinksFormSchema,
} from '../../utils/userForms';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';

export const SocialLinksForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<AccountSocialLinksForm>({
    resolver: yupResolver(accountSocialLinksFormSchema),
    defaultValues: {
      [AccountSocialFieldsNames.facebook]: 'https://www.facebook.com/',
      [AccountSocialFieldsNames.twitter]: 'https://twitter.com/',
      [AccountSocialFieldsNames.instagram]: 'https://www.instagram.com/',
      [AccountSocialFieldsNames.linkedin]: 'https://www.linkedin.com/',
    }
  });

  const handleSave = useCallback((data: AccountSocialLinksForm) => {
    console.log(data);
  }, [])

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <Card elevation={2} sx={{ padding: 2 }}>
        <CardContent>
          <Stack spacing={2}>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <FormControl fullWidth>
                <TextField {...register(AccountSocialFieldsNames.facebook)} InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Facebook />
                    </InputAdornment>
                  ),
                }} label={'Facebook'} size={'medium'} />
                {errors[AccountSocialFieldsNames.facebook] && <FormHelperText error>{errors[AccountSocialFieldsNames.facebook].message}</FormHelperText>}
              </FormControl>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <FormControl fullWidth>
                <TextField {...register(AccountSocialFieldsNames.instagram)} InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Instagram />
                    </InputAdornment>
                  ),
                }} label={'Instagram'} size={'medium'} />
                {errors[AccountSocialFieldsNames.instagram] && <FormHelperText error>{errors[AccountSocialFieldsNames.instagram].message}</FormHelperText>}
              </FormControl>
            </Stack>

            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <FormControl fullWidth>
                <TextField {...register(AccountSocialFieldsNames.twitter)} InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Twitter />
                    </InputAdornment>
                  ),
                }} label={'Instagram'} size={'medium'} />
                {errors[AccountSocialFieldsNames.twitter] && <FormHelperText error>{errors[AccountSocialFieldsNames.twitter].message}</FormHelperText>}
              </FormControl>
            </Stack>

            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <FormControl fullWidth>
                <TextField {...register(AccountSocialFieldsNames.linkedin)} InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkedIn />
                    </InputAdornment>
                  ),
                }} label={'Instagram'} size={'medium'} />
                {errors[AccountSocialFieldsNames.linkedin] && <FormHelperText error>{errors[AccountSocialFieldsNames.linkedin].message}</FormHelperText>}
              </FormControl>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type={'submit'} variant={'contained'}>Save changes</Button>
        </CardActions>
      </Card>
    </form>
  )
}