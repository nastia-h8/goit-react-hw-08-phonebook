import { useEffect } from 'react';
import { Overlay, Button, Wrapper } from './EditModal.styled';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { EditForm } from 'components/EditForm/EditForm';

export function EditModal({ onModalClose, contact }) {
  useEffect(() => {
    const onEscPressKey = e => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', onEscPressKey);

    return () => {
      window.removeEventListener('keydown', onEscPressKey);
    };
  }, [onModalClose]);

  return (
    <Overlay>
      <Wrapper>
        <EditForm contact={contact} onModalClose={onModalClose} />
        <Button type="button" onClick={onModalClose}>
          <IoCloseCircleOutline size={30} />
        </Button>
      </Wrapper>
    </Overlay>
  );
}
