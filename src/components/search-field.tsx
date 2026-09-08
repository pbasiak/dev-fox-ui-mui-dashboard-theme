import { InputAdornment, TextField } from '@mui/material';
import SearchRounded from '@mui/icons-material/SearchRounded';
export function SearchField({
  value,
  onChange,
  placeholder = 'Search…',
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <TextField
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      slotProps={{
        htmlInput: { 'aria-label': placeholder },
        input: {
          startAdornment: (
            <InputAdornment position='start'>
              <SearchRounded sx={{ fontSize: 18, color: 'text.secondary' }} />
            </InputAdornment>
          ),
        },
      }}
      sx={{ width: { xs: '100%', sm: 280 } }}
    />
  );
}
