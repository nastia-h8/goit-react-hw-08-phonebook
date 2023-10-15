import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <Typography variant="body1">{`Hello, ${user.name}`}</Typography>
      <IconButton
        sx={{ color: 'white' }}
        aria-label="logOut"
        onClick={handleLogOut}
      >
        <LogoutRoundedIcon />
      </IconButton>
    </Stack>
  );
}
