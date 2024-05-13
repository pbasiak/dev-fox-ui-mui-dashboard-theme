import { Box, styled } from '@mui/material';

export const SlateEditorContainer = styled(Box, { shouldForwardProp: (prop) => prop !== 'readOnly' })<{
  readOnly: boolean;
}>(({ theme, readOnly }) => ({
  '& > div[role="textbox"]': {
    border: readOnly ? 0 : `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    padding: `calc(${theme.spacing(2)} + 1px)`,
    '&:hover': {
      borderColor: theme.palette.text.primary,
    },
    '&:focus': {
      borderWidth: '2px',
      padding: `calc(${theme.spacing(2)} + 0px)`,
      borderColor: theme.palette.primary.main,
      outline: 'none',
    },
  },
  '& [data-slate-placeholder]': {
    color: theme.palette.text.secondary,
    opacity: '1 !important',
    padding: theme.spacing(3.7, 0),
  },
}));
