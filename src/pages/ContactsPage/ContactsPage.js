import { Helmet } from 'react-helmet-async';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Container } from './ContactsPage.styled';

export default function ContactsPage() {
  return (
    <Container>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <Contacts />
    </Container>
  );
}
