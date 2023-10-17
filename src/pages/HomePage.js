import { Helmet } from 'react-helmet-async';
import { useAuth } from 'hooks/useAuth';
import homeImg from 'images/home.jpg';

import { Box, Container, Typography } from '@mui/material';

export default function HomePage() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Container
        sx={{
          pt: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '3.75rem' }}>
          PhoneBook
        </Typography>
        <Typography component="p" variant="subtitle1">
          This App keeps track of your contacts with ease! It allows you to add,
          delete and edit contacts quickly and easily. Stay in touch with the
          people you care about!
        </Typography>
        {!isLoggedIn && (
          <Typography variant="subtitle2">
            Sign up or Log In to discover this service!
          </Typography>
        )}

        <Box
          sx={{
            margin: '0 auto',
            backgroundImage: `url(${homeImg})`,
            backgroundSize: 'cover',
            width: '600px',
            height: '400px',
          }}
        ></Box>
      </Container>
    </>
  );
}
