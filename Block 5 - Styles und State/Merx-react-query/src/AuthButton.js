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
  const { login, logout, isLoggedIn, isLoading, error, data } = useUser();

  if (isLoading) return <CircularProgress />;

  if (error) return <>⚠️</>;

  if (isLoggedIn)
    return (
      <Button onClick={logout} color="primary" variant="outlined">
        {data.name}
      </Button>
    );

  return (
    <Button component={RouterLink} to="/login" color="primary">
      {LOCALE[locale]}
    </Button>
  );
}
