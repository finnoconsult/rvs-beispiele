import { Link as RouterLink } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';
import { useLanguage } from './LanguageContext';
import { useUser } from './UserContext';

const languageMap = {
  de: 'Anmelden',
  en: 'Login',
  fr: 'Entre',
};

export function AuthButton() {
  const { language } = useLanguage();
  const { isLoggedIn, isLoading, data, error, logout } = useUser();

  if (isLoading) return <CircularProgress />;

  if (error) return <span>⚠️</span>;

  if (isLoggedIn)
    return (
      <Button onClick={logout} color="primary" variant="outlined">
        {data.name}
      </Button>
    );

  return (
    <Button component={RouterLink} to="/login" color="primary">
      {languageMap[language]}
    </Button>
  );
}
