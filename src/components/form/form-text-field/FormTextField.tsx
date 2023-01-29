import { FormControl, FormControlProps, FormHelperText, TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface FormTextFieldProps<TFormValues extends FieldValues> {
  register: UseFormRegister<TFormValues>;
  errors: FieldErrors<TFormValues>;
  name: Path<TFormValues>;
  label: string;
  formControlProps?: FormControlProps;
  textFieldProps?: TextFieldProps;
}

export function FormTextField <TFormValues extends FieldValues>({ register, errors, name, label, formControlProps, textFieldProps }: FormTextFieldProps<TFormValues>) {
  const isError = Boolean(errors && errors[name]);

  return (
    <FormControl fullWidth margin={'normal'} {...formControlProps}>
      <TextField error={isError} {...textFieldProps} {...register(name)} label={label} size={'small'}/>
      {/*@ts-ignore TODO: fix*/}
      {isError ? <FormHelperText error >{errors[name].message}</FormHelperText> : null}
    </FormControl>
  )
}