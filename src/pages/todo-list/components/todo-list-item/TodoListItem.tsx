import { Checkbox, IconButton, ListItem, ListItemIcon, ListItemText, TextField } from '@mui/material';
import React, { useCallback } from 'react';
import { Delete, Edit, Save } from '@mui/icons-material';
import { Task } from '../../types/task';

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  onEdit: (id: string, name: string) => void;
}

export const TodoListItem = ({ task, onDelete, onComplete, onEdit }: Props) => {
  const [editTaskValue, setEditTaskValue] = React.useState<string>(task.name);
  const [editMode, setEditMode] = React.useState<boolean>(false);

  const handleSave = useCallback(() => {
    onEdit(task.id, editTaskValue);
    setEditMode(false);
  }, [editTaskValue]);

  return (
    <ListItem
      key={task.id}
      sx={{
        textDecoration: task.completed ? 'line-through' : 'none',
        backgroundColor: task.completed ? 'success.light' : 'background.paper',
        color: task.completed ? 'success.contrastText' : 'text.primary',
        borderRadius: '4px',
        marginBottom: 1,
      }}
    >
      <Checkbox color={'default'} checked={task.completed} onChange={() => onComplete(task.id)} />
      {editMode ? (
        <TextField
          label='Edit task'
          variant='outlined'
          size={'small'}
          value={editTaskValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditTaskValue(e.target.value)}
          sx={{ flexGrow: 1, marginRight: 4, color: task.completed ? 'success.contrastText' : 'text.primary' }}
        />
      ) : (
        <ListItemText primary={task.name} />
      )}
      <ListItemIcon>
        {editMode ? (
          <IconButton sx={{ color: task.completed ? 'success.contrastText' : 'text.primary' }} onClick={handleSave}>
            <Save />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => setEditMode(true)}
            sx={{ color: task.completed ? 'success.contrastText' : 'text.primary' }}
          >
            <Edit />
          </IconButton>
        )}
      </ListItemIcon>
      <ListItemIcon>
        <IconButton
          onClick={() => onDelete(task.id)}
          sx={{ color: task.completed ? 'success.contrastText' : 'text.primary' }}
        >
          <Delete />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
};
