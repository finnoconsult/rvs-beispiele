import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useUser, login } from './UserContext';

export function Login() {
  const navigate = useNavigate();
  const [user, dispatch] = useUser();

  const onSubmit = async (event) => {
    event.preventDefault();
    const credentials = Object.fromEntries(new FormData(event.target));
    login(credentials, dispatch);
  };

  // wenn wir eingeloggt sind, navigiere zur startseite
  useEffect(() => {
    if (user.isLoggedIn) navigate('/');
  }, [user.isLoggedIn, navigate]);

  // während wir auf den server warten, zeigen wir einen spinner
  if (user.isLoading)
    return (
      <Box textAlign="center" mt={2}>
        <CircularProgress />
      </Box>
    );

  return (
    <Container component="main" maxWidth="xs">
      <Box marginTop={4} display="flex" flexDirection="column" alignItems="center">
        {user.error && (
          <Alert severity="error" sx={{ marginBottom: 3 }}>
            <AlertTitle>Fehler</AlertTitle>
            {user.error}
          </Alert>
        )}
        <Typography component="h2" variant="h5">
          Log in
        </Typography>
        <Box as="form" width="100%" mt={2} onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            defaultValue="info@rvs.at"
            autoFocus
            fullWidth
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            defaultValue="ware"
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Log in
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
