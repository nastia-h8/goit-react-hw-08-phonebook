import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoggedIn,
  selectIsLoggingIn,
  selectIsRefreshing,
  selectIsRegister,
  selectToken,
  selectUser,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isRegister = useSelector(selectIsRegister);
  const isLoggingIn = useSelector(selectIsLoggingIn);
  const error = useSelector(selectError);
  const token = useSelector(selectToken);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    error,
    isRegister,
    isLoggingIn,
    token,
  };
};
