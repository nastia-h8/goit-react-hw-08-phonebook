import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';

import { ContactFilter } from 'components/Contacts/ContactFilter';
import { ContactList } from 'components/Contacts/ContactList';
import { SortingBar } from 'components/SortingBar';
import { Loader } from 'components/Loader';

import { Typography } from '@mui/material';

export function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactFilter />
      <SortingBar />

      {!contacts.length && !isLoading ? (
        <Typography variant="subtitle2" align="center">
          No contacts yet
        </Typography>
      ) : (
        <ContactList />
      )}

      {isLoading && <Loader />}
      {error && <Typography variant="subtitle2">{error}</Typography>}
    </>
  );
}
