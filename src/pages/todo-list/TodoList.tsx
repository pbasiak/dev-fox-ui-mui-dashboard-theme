import { useCallback, useState } from 'react';
import { Typography, Button, List, Container, Paper, Stack } from '@mui/material';
import { PageHeader } from '../../components/page-header/PageHeader';
import { Task } from './types/task';
import { TodoListItem } from './components/todo-list-item/TodoListItem';
import { Add } from '@mui/icons-material';
import { AddTodo } from './components/add-todo/AddTodo.tsx';

const createUUID = () => self.crypto.randomUUID();

const defaultTasks: Task[] = [
  { id: createUUID(), name: 'Task 1', completed: true },
  { id: createUUID(), name: 'Task 2', completed: false },
  { id: createUUID(), name: 'Task 3', completed: false },
];

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [addTaskModalOpen, setAddTaskModalOpen] = useState<boolean>(false);
  const [hideCompleted, setHideCompleted] = useState<boolean>(false);

  const handleEditTask = useCallback(
    (id: string, name: string) => {
      setTasks(tasks.map((task) => (task.id === id ? { ...task, name } : task)));
    },
    [tasks],
  );

  const handleAddTask = (value: string) => {
    if (value.trim() !== '') {
      setTasks([...tasks, { id: createUUID(), name: value, completed: false }]);
    }
  };

  const handleAddTaskModalOpen = useCallback(() => setAddTaskModalOpen(true), []);
  const handleAddTaskModalClose = useCallback(() => setAddTaskModalOpen(false), []);

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
      <PageHeader
        title={'Tasks'}
        breadcrumbs={['Tasks']}
        renderRight={
          <Button variant='contained' color='primary' onClick={handleAddTaskModalOpen} startIcon={<Add />}>
            Add Task
          </Button>
        }
      />

      <Paper sx={{ px: 2, py: 3 }}>
        <Stack>
          <Button variant='outlined' onClick={() => setHideCompleted(!hideCompleted)}>
            {hideCompleted ? 'Show completed' : 'Hide completed'}
          </Button>
        </Stack>
        {tasks.length === 0 ? (
          <Typography variant='body1' textAlign={'center'} marginTop={4} fontWeight={'fontWeightMedium'}>
            No tasks added yet.
          </Typography>
        ) : (
          <List>
            {tasks.map((task) => {
              if (hideCompleted && task.completed) {
                return null;
              }

              return (
                <TodoListItem
                  key={task.id}
                  task={task}
                  onDelete={handleDeleteTask}
                  onComplete={handleCompleteTask}
                  onEdit={handleEditTask}
                />
              );
            })}
          </List>
        )}
      </Paper>

      <AddTodo open={addTaskModalOpen} handleClose={handleAddTaskModalClose} onSubmit={handleAddTask} />
    </Container>
  );
}
