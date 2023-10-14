import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsDeleting } from 'redux/contacts/selectors';

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import {
  Button,
  Item,
  Name,
  ButtonWrapper,
  InfoWrapper,
} from './ContactListItem.styled';
import { Loader } from 'components/Loader/Loader';
import { useState } from 'react';
import { EditModal } from 'components/EditModal/EditModal';

export function ContactListItem(contact) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsDeleting);
  const isDeletingItem = isDeleting.status && isDeleting.id === contact.id;

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Item>
        <InfoWrapper>
          <Name>{contact.name}</Name>
          <span>{contact.number}</span>
        </InfoWrapper>
        <ButtonWrapper>
          <Button type="button" onClick={handleModalOpen}>
            {<AiOutlineEdit size={20} />}
          </Button>
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            {isDeletingItem ? (
              <Loader size={20} />
            ) : (
              <AiOutlineDelete size={20} />
            )}
          </Button>
        </ButtonWrapper>
      </Item>
      {isModalOpen && (
        <EditModal onModalClose={handleModalClose} contact={contact} />
      )}
    </>
  );
}
