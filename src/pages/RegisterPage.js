import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div>
      <RegisterForm />
      <p>Already have an account?</p>
      <Link to="/login">Log in</Link>
    </div>
  );
}
