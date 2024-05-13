import { MenuItem, Select, styled } from '@mui/material';

export const TypographyTypeSelect = styled(Select<string>)(({ theme }) => ({
  '& .MuiSelect-select': {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    fontWeight: theme.typography.fontWeightBold,
  },

  fieldset: {
    border: 'none',
  },
}));

export const TypographyTypeItem = styled(MenuItem)(() => ({}));
