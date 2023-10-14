import { Helmet } from 'react-helmet-async';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';

export default function ContactsPage() {
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <Contacts />
    </div>
  );
}
