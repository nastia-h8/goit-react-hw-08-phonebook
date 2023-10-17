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
    <List
      sx={{
        p: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
      }}
    >
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </List>
  );
}
