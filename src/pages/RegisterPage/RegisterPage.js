import { Helmet } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container, NavContainer, StyledLink } from './RegisterPage.styled';

export default function RegisterPage() {
  return (
    <Container>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <RegisterForm />
      <NavContainer>
        <b>Already have an account?</b>
        <StyledLink to="/login">Log in</StyledLink>
      </NavContainer>
    </Container>
  );
}
