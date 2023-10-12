import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsDeleting } from 'redux/contacts/selectors';

import { AiOutlineDelete } from 'react-icons/ai';
import { Button, Item, Name, NumberWrapper } from './ContactListItem.styled';
import { Loader } from 'components/Loader/Loader';

export function ContactListItem({ id, number, name }) {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsDeleting);
  const isDeletingItem = isDeleting.status && isDeleting.id === id;

  return (
    <Item>
      <Name>{name}</Name>
      <NumberWrapper>
        <span>Number: </span>
        {number}
      </NumberWrapper>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        {isDeletingItem ? <Loader size={20} /> : <AiOutlineDelete size={20} />}
      </Button>
    </Item>
  );
}
