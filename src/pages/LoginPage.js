import { Helmet } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <LoginForm />
      <p>Don't have an account yet?</p>
      <Link to="/register">Sign Up</Link>
    </div>
  );
}
