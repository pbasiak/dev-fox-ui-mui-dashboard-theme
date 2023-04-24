import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';

interface Props {
  open: boolean;
  onDeleteItems: () => void;
  onClose: () => void;
  itemsLength: number;
}

export const DeleteDialog = ({ open, onDeleteItems, onClose, itemsLength }: Props) => {
  const handleClose = () => {
    onClose();
  };

  const handleDelete = () => {
    onDeleteItems();
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete <Typography component={'span'} fontWeight={'fontWeightBold'}>{itemsLength}</Typography> user(s)?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button variant={'contained'} onClick={handleDelete} color="error" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
