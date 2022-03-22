import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { USER_LOGOUT } from './store/actions';

export function AuthButton() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logout = () => dispatch({ type: USER_LOGOUT });

  if (user.isLoading) return <CircularProgress />;

  if (user.error) return <span>⚠️</span>;

  if (user.isLoggedIn)
    return (
      <Button onClick={logout} color="primary" variant="outlined">
        {user.name}
      </Button>
    );

  return (
    <Button component={RouterLink} to="/login" color="primary">
      Login
    </Button>
  );
}
