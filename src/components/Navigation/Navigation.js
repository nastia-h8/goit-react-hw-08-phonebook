import { useAuth } from 'hooks/useAuth';
import { Container, StyledLink } from './Navigation.styled';

export function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">My contacts</StyledLink>}
    </Container>
  );
}
