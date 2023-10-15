import { useAuth } from 'hooks/useAuth';
import { Link as RouterLink } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function Navigation() {
  const { isLoggedIn } = useAuth();
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
          pathname: '/',
        }}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          sx={{ color: 'white' }}
          variant="text"
          component={RouterLink}
          to={{
            pathname: '/contacts',
          }}
        >
          My contacts
        </Button>
      )}
    </Stack>
  );
}
