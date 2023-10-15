import { Link as RouterLink } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function AuthNav() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <Button
        sx={{ color: 'white' }}
        variant="text"
        component={RouterLink}
        to={{
          pathname: '/register',
        }}
      >
        Sign up
      </Button>
      <Button
        sx={{ color: 'white' }}
        variant="text"
        component={RouterLink}
        to={{
          pathname: '/login',
        }}
      >
        Log in
      </Button>
    </Stack>
  );
}
