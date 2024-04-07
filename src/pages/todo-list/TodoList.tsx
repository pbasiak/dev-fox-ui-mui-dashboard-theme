import React, { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Typography, TextField, Button, List, Stack, Container } from '@mui/material';
import { PageHeader } from '../../components/page-header/PageHeader';
import { Task } from './types/task';
import { TodoListItem } from './components/todo-list-item/TodoListItem';

const defaultTasks: Task[] = [
  { id: uuid(), name: 'Task 1', completed: true },
  { id: uuid(), name: 'Task 2', completed: false },
  { id: uuid(), name: 'Task 3', completed: false },
];

export const TodoList: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: uuid(), name: task, completed: false }]);
      setTask('');
    }
  };

  const handleDeleteTask = useCallback(
    (id: string) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
    [tasks],
  );

  const handleCompleteTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <Container>
      <PageHeader title={'Todo List'} breadcrumbs={['Todo List']} />
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'} marginBottom={2}>
        <TextField
          label='Add a task'
          variant='outlined'
          value={task}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
          sx={{ flexGrow: 1 }}
        />
        <Button variant='contained' color='primary' onClick={handleAddTask}>
          Add Task
        </Button>
      </Stack>
      {tasks.length === 0 ? (
        <Typography variant='body1' textAlign={'center'} marginTop={4} fontWeight={'fontWeightMedium'}>
          No tasks added yet.
        </Typography>
      ) : (
        <List>
          {tasks.map((task) => (
            <TodoListItem key={task.id} task={task} onDelete={handleDeleteTask} onComplete={handleCompleteTask} />
          ))}
        </List>
      )}
    </Container>
  );
};
