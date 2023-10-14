import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <p>Hello, this is App for managing your contacts your contacts</p>
    </div>
  );
}
