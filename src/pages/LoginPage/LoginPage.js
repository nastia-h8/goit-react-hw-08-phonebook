import { Helmet } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container, NavContainer, StyledLink } from './LoginPage.styled';

export default function LoginPage() {
  return (
    <Container>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <LoginForm />
      <NavContainer>
        <b>Don't have an account yet?</b>
        <StyledLink to="/register">Sign Up</StyledLink>
      </NavContainer>
    </Container>
  );
}
