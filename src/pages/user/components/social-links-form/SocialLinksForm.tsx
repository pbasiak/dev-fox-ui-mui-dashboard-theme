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
  AccountFieldsNames,
  AccountSocialLinksForm,
  accountSocialLinksFormSchema,
} from '../../utils/userForms';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';

export const SocialLinksForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<AccountSocialLinksForm>({
    resolver: yupResolver(accountSocialLinksFormSchema),
    defaultValues: {
      [AccountFieldsNames.facebook]: 'https://www.facebook.com/',
      [AccountFieldsNames.twitter]: 'https://twitter.com/',
      [AccountFieldsNames.instagram]: 'https://www.instagram.com/',
      [AccountFieldsNames.linkedin]: 'https://www.linkedin.com/',
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
                <TextField {...register(AccountFieldsNames.facebook)} InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Facebook />
                    </InputAdornment>
                  ),
                }} label={'Facebook'} size={'medium'} />
                {errors[AccountFieldsNames.facebook] && <FormHelperText error>{errors[AccountFieldsNames.facebook].message}</FormHelperText>}
              </FormControl>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <FormControl fullWidth>
                <TextField {...register(AccountFieldsNames.instagram)} InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Instagram />
                    </InputAdornment>
                  ),
                }} label={'Instagram'} size={'medium'} />
                {errors[AccountFieldsNames.instagram] && <FormHelperText error>{errors[AccountFieldsNames.instagram].message}</FormHelperText>}
              </FormControl>
            </Stack>

            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <FormControl fullWidth>
                <TextField {...register(AccountFieldsNames.twitter)} InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Twitter />
                    </InputAdornment>
                  ),
                }} label={'Instagram'} size={'medium'} />
                {errors[AccountFieldsNames.twitter] && <FormHelperText error>{errors[AccountFieldsNames.twitter].message}</FormHelperText>}
              </FormControl>
            </Stack>

            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <FormControl fullWidth>
                <TextField {...register(AccountFieldsNames.linkedin)} InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkedIn />
                    </InputAdornment>
                  ),
                }} label={'Instagram'} size={'medium'} />
                {errors[AccountFieldsNames.linkedin] && <FormHelperText error>{errors[AccountFieldsNames.linkedin].message}</FormHelperText>}
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