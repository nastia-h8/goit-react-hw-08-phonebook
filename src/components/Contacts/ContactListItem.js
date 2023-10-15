import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsDeleting, selectIsEditing } from 'redux/contacts/selectors';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import { Loader } from 'components/Loader';
import { useState } from 'react';
import { EditModal } from 'components/EditModal';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ListItem } from '@mui/material';

export function ContactListItem(contact) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const isEditing = useSelector(selectIsEditing);
  const isDeleting = useSelector(selectIsDeleting);

  const isDeletingItem = isDeleting.status && isDeleting.id === contact.id;
  const isEditingItem = isEditing.status && isEditing.id === contact.id;

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ListItem sx={{ pl: '0' }}>
      <Card
        sx={{
          minWidth: 360,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <CardContent>
          <Typography variant="h6" component="div">
            {contact.name}
          </Typography>
          <Typography color="text.secondary">{contact.number}</Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'center' }}>
          <Button type="button" onClick={handleModalOpen} variant="outlined">
            {isEditingItem ? <Loader /> : <EditRoundedIcon />}
          </Button>
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
            variant="outlined"
          >
            {isDeletingItem ? <Loader /> : <DeleteOutlineRoundedIcon />}
          </Button>
        </CardActions>
      </Card>

      {isModalOpen && (
        <EditModal
          onModalClose={handleModalClose}
          contact={contact}
          isModalOpen={isModalOpen}
        />
      )}
    </ListItem>
  );
}
