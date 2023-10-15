import { Helmet } from 'react-helmet-async';
import { ContactForm } from 'components/Forms/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Container } from '@mui/material';

export default function ContactsPage() {
  return (
    <Container
      sx={{
        pt: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <Contacts />
    </Container>
  );
}
