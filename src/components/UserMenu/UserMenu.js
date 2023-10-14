import { IoLogOutOutline } from 'react-icons/io5';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Container, Button } from './UserMenu.styled';

export function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Container>
      <p>{`Hello, ${user.name}`}</p>
      <Button onClick={handleLogOut}>
        <IoLogOutOutline size={20} />
      </Button>
    </Container>
  );
}
