import { Container, StyledLink } from './AuthNav.styled';

export function AuthNav() {
  return (
    <Container>
      <StyledLink to="/register">Sign up</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </Container>
  );
}
