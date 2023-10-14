import { Helmet } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <RegisterForm />
      <p>Already have an account?</p>
      <Link to="/login">Log in</Link>
    </div>
  );
}
