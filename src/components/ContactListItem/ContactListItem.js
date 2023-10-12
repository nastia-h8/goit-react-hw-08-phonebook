import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsDeleting } from 'redux/contacts/selectors';

import { AiOutlineDelete } from 'react-icons/ai';
import { Button, Item, Name, NumberWrapper } from './ContactListItem.styled';
import { Loader } from 'components/Loader/Loader';

export function ContactListItem(contact) {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsDeleting);
  const isDeletingItem = isDeleting.status && isDeleting.id === contact.id;

  return (
    <Item>
      <Name>{contact.name}</Name>
      <NumberWrapper>
        <span>Number: </span>
        {contact.number}
      </NumberWrapper>

      <Button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        {isDeletingItem ? <Loader size={20} /> : <AiOutlineDelete size={20} />}
      </Button>
    </Item>
  );
}
