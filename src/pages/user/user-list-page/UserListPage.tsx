import { SidebarLayout } from '../../../layouts/sidebar-layout/SidebarLayout';
import { PageHeader } from '../../../components/page-header/PageHeader';
import { DataGrid, GridColDef, GridSelectionModel, GridValueGetterParams } from '@mui/x-data-grid';
import { Container, Button, Stack, IconButton, Box, Paper } from '@mui/material';
import { Add, DeleteOutline, Edit } from '@mui/icons-material';
import { useCallback, useState } from 'react';
import { DeleteDialog } from './components/delete-dialog/DeleteDialog';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

// TODO: refactor data

export const UserListPage = () => {
  const [showEditBar, setShowEditBar] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState<GridSelectionModel>([]);

  const isSingleRowSelected = selectedRows.length === 1;

  const handleSelectionChange = useCallback((model: GridSelectionModel) => {
    const isSelectionEmpty = model.length === 0;

    setSelectedRows(model);
    setShowEditBar(!isSelectionEmpty);
  }, []);

  const handleDeleteDialogOpen = () => setDeleteDialogOpen(true);
  const handleDeleteDialogClose = () => setDeleteDialogOpen(false);

  const handleDeleteItems = useCallback(() => {
    console.log('delete items');
  }, [])

  return (
    <SidebarLayout>
      <Container maxWidth={'lg'}>
        <PageHeader title={'Users list'} breadcrumbs={['Users', 'List']} renderRight={<Button variant={'contained'} startIcon={<Add />}>Add user</Button>} />
        {showEditBar ? <Stack direction={'row'} spacing={1} sx={{ backgroundColor: 'primary.main', borderRadius: '4px', mb: 1, px: 1, py: 0.5 }}>
          {isSingleRowSelected ? <IconButton color={'secondary'}><Edit /></IconButton> : null}

          <IconButton color={'secondary'} onClick={handleDeleteDialogOpen}><DeleteOutline /></IconButton>

          <DeleteDialog open={deleteDialogOpen} onClose={handleDeleteDialogClose} onDeleteItems={handleDeleteItems} itemsLength={selectedRows.length} />
        </Stack> : null}
        <Box sx={{ height: 400, width: '100%', p: 0, borderRadius: 1, overflow:'hidden' }} component={Paper}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            onSelectionModelChange={handleSelectionChange}
          />
        </Box>
      </Container>
    </SidebarLayout>
  );
}