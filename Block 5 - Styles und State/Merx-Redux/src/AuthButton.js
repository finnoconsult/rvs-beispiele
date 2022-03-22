import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { USER_LOGIN, USER_LOGOUT } from './store/actions';

export function AuthButton() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const setIsLoggedIn = () => dispatch({ type: isLoggedIn ? USER_LOGOUT : USER_LOGIN });

  return (
    <Button onClick={() => setIsLoggedIn((b) => !b)} color="primary" variant="outlined">
      {isLoggedIn ? 'Logout' : 'Login'}
    </Button>
  );
}
