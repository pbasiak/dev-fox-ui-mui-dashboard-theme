import { Box, styled } from '@mui/material';

export const SlateEditorContainer = styled(Box)(({ theme }) => ({
  '& > div': {
    border: `1px solid #c0c0c0`,
    borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)',
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
