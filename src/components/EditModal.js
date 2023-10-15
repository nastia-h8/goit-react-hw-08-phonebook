import { EditForm } from 'components/Forms/EditForm';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function EditModal({ onModalClose, contact, isModalOpen }) {
  return (
    <Modal
      open={isModalOpen}
      onClose={onModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Button type="button" onClick={onModalClose} variant="text">
          <ArrowBackRoundedIcon sx={{ mr: '4px' }} /> Back
        </Button>
        <EditForm contact={contact} onModalClose={onModalClose} />
      </Box>
    </Modal>
  );
}
