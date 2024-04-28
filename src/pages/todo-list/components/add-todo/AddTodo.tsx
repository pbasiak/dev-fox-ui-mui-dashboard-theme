import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

interface AddTodoProps {
  open: boolean;
  handleClose: () => void;
  onSubmit: (value: string) => void;
}

export const AddTodo = ({ open, handleClose, onSubmit }: AddTodoProps) => {
  const [task, setTask] = useState<string>('');

  const handleSubmit = () => {
    onSubmit(task);
    setTask('');
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth={'sm'}>
      <DialogTitle>Add Todo</DialogTitle>
      <DialogContent>
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'} marginBottom={2} sx={{ py: 1 }}>
          <TextField
            label='Name'
            variant='outlined'
            value={task}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
            sx={{ flexGrow: 1 }}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant={'contained'} color={'primary'} onClick={handleSubmit}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
