import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

import { ContactListItem } from 'components/Contacts/ContactListItem';
import { List, Typography } from '@mui/material';

export function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  return !visibleContacts.length && !isLoading ? (
    <Typography variant="subtitle2">No contacts found</Typography>
  ) : (
    <List>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </List>
  );
}
