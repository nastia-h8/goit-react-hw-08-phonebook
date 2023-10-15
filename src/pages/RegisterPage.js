import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { RegisterForm } from 'components/Forms/RegisterForm';

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function RegisterPage() {
  return (
    <div>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <RegisterForm />
      <Stack
        marginTop={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="body1">Already have an account?</Typography>
        <Button
          variant="outlined"
          component={RouterLink}
          to={{
            pathname: '/login',
          }}
        >
          Log in
        </Button>
      </Stack>
    </div>
  );
}
