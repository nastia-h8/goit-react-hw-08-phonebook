import { Helmet } from 'react-helmet-async';
import { Container } from './HomePage.styled';
import { useAuth } from 'hooks/useAuth';
import homeImg from 'images/home.jpg';

export default function HomePage() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Container>
        <>
          <h1>PhoneBook</h1>
          <p>
            This App keeps track of your contacts with ease! It allows you to
            add, delete and edit contacts quickly and easily. Stay in touch with
            the people you care about!
          </p>
          {!isLoggedIn && <b>Sign up or Log In to discover this service!</b>}
          <img src={homeImg} alt="home page"></img>
        </>
      </Container>
    </>
  );
}
