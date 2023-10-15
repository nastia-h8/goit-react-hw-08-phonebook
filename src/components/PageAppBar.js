import { UserMenu } from 'components/UserMenu';

import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/AuthNav';

import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Navigation } from './Navigation';

export function PageAppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="static">
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          minHeight={64}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Stack>
      </Container>
    </AppBar>
  );
}
