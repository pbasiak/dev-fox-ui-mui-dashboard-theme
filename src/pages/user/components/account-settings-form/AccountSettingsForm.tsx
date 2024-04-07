import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useCallback } from 'react';

const leftColumnSx = { maxWidth: '200px', width: '100%' };

const CheckboxWithForm = ({ control, name, label }: { control: any; name: string; label: string }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <FormControlLabel
          control={<Checkbox onBlur={onBlur} onChange={onChange} checked={value} inputRef={ref} />}
          label={label}
        />
      )}
    />
  );
};

export const AccountSettingsForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      enableEmailNotifications: true,
      enableSmsNotifications: false,
      emailPublic: true,
      profilePublic: false,
    },
  });

  const handleSave = useCallback((data: unknown) => {
    console.log(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(handleSave)}>
      <Card elevation={2} sx={{ padding: 2 }}>
        <CardContent>
          <Stack spacing={6}>
            <Stack direction={'row'} spacing={2}>
              <Stack spacing={2} paddingY={1} sx={leftColumnSx}>
                <Typography fontWeight={'fontWeightMedium'}>Notifications</Typography>
              </Stack>
              <Stack spacing={2}>
                <FormGroup>
                  <CheckboxWithForm
                    control={control}
                    name={'enableEmailNotifications'}
                    label='Enable email notifications'
                  />
                  <CheckboxWithForm
                    control={control}
                    name={'enableSmsNotifications'}
                    label='Enable SMS notifications'
                  />
                </FormGroup>
              </Stack>
            </Stack>

            <Stack direction={'row'} spacing={2}>
              <Stack spacing={2} paddingY={1} sx={leftColumnSx}>
                <Typography fontWeight={'fontWeightMedium'}>Privacy</Typography>
              </Stack>
              <Stack spacing={2}>
                <FormGroup>
                  <CheckboxWithForm control={control} name={'emailPublic'} label='Email address is public' />
                  <CheckboxWithForm control={control} name={'profilePublic'} label='Profile is public' />
                </FormGroup>
              </Stack>
            </Stack>

            <Stack direction={'row'} spacing={2}>
              <Stack spacing={2} paddingY={1} sx={leftColumnSx}>
                <Typography fontWeight={'fontWeightMedium'}>Adds</Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography variant={'body2'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ante sapien. Sed quis mattis mauris.
                  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vel
                  mattis magna. Ut risus ipsum, consequat at est non, interdum consequat elit. Aenean non est interdum,
                  sagittis elit sodales, tincidunt leo. Vivamus quis viverra est. Suspendisse potenti. Sed lobortis arcu
                  in porttitor venenatis. In hac habitasse platea dictumst.{' '}
                </Typography>
              </Stack>
            </Stack>

            <Stack direction={'row'} spacing={2}>
              <Stack spacing={2} paddingY={1} sx={leftColumnSx}>
                <Typography fontWeight={'fontWeightMedium'}>Delete account</Typography>
              </Stack>
              <Stack spacing={2}>
                <Button variant={'contained'} color={'error'}>
                  Delete account
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type={'submit'} variant={'contained'}>
            Save changes
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
