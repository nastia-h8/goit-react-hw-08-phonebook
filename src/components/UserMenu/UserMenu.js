import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <p>{`Hello, ${user.name}`}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}
