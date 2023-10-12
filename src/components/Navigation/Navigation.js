import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';

export function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">My contacts</Link>}
    </div>
  );
}
