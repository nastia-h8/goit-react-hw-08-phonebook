import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { LoginForm } from 'components/Forms/LoginForm';

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <LoginForm />
      <Stack
        marginTop={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="body1">Don't have an account yet?</Typography>
        <Button
          variant="outlined"
          component={RouterLink}
          to={{
            pathname: '/register',
          }}
        >
          Sign Up
        </Button>
      </Stack>
    </>
  );
}
