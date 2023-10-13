import { LoginForm } from 'components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      <LoginForm />
      <p>Don't have an account yet?</p>
      <Link to="/register">Sign Up</Link>
    </div>
  );
}
