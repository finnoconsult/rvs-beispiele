import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocale } from './LanguageContext';
import { useUser } from './UserContext';

const LOCALE = {
  de: 'Einloggen',
  en: 'Login',
  fr: 'Connecter',
};

export function AuthButton() {
  const { locale } = useLocale();
  const [user, dispatch] = useUser();

  const logout = () => dispatch({ type: 'USER_LOGOUT' });

  if (user.isLoading) return <CircularProgress />;

  if (user.error) return <>⚠️</>;

  if (user.isLoggedIn)
    return (
      <Button onClick={logout} color="primary" variant="outlined">
        {user.name}
      </Button>
    );

  return (
    <Button component={RouterLink} to="/login" color="primary">
      {LOCALE[locale]}
    </Button>
  );
}
