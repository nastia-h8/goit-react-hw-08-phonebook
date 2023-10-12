import { Link } from 'react-router-dom';

export function AuthNav() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Link to="/register">Sign up</Link>
      <Link to="/login">Log in</Link>
    </div>
  );
}
