import {
  Dialog,
  DialogContent,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import SearchRounded from '@mui/icons-material/SearchRounded';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { navigation } from './navigation';
export function PageSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const matches = navigation.filter((item) =>
    `${item.label} ${item.description}`.toLowerCase().includes(query.toLowerCase()),
  );
  const go = (path: string) => {
    navigate(path);
    onClose();
    setQuery('');
  };
  return (
    <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth aria-label='Search workspace pages'>
      <DialogContent>
        <TextField
          fullWidth
          autoFocus
          placeholder='Where would you like to go?'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && matches[0]) go(matches[0].path);
          }}
          slotProps={{
            htmlInput: { 'aria-label': 'Search workspace pages' },
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchRounded />
                </InputAdornment>
              ),
            },
          }}
        />
        <Typography variant='overline' sx={{ color: 'text.secondary', display: 'block', mt: 2 }}>
          Pages
        </Typography>
        <List component='div'>
          {matches.map((item) => (
            <ListItemButton key={item.path} onClick={() => go(item.path)} sx={{ borderRadius: '8px' }}>
              <ListItemIcon>
                <item.icon fontSize='small' />
              </ListItemIcon>
              <ListItemText primary={item.label} secondary={item.description} />
            </ListItemButton>
          ))}
        </List>
        {!matches.length && (
          <Typography sx={{ color: 'text.secondary', p: 3, textAlign: 'center' }}>No pages match “{query}”.</Typography>
        )}
        <Typography variant='caption' sx={{ color: 'text.secondary' }}>
          Enter to open the first result · Esc to close
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
