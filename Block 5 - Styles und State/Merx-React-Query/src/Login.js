import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, TextField, CircularProgress, Button, Alert, AlertTitle } from '@mui/material';
import { useUser } from './UserContext';

export function Login() {
  const navigate = useNavigate();
  const { isLoggedIn, isLoading, error, login } = useUser();

  const onSubmit = (event) => {
    event.preventDefault();
    const credentials = Object.fromEntries(new FormData(event.target));
    login(credentials);
  };

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  return (
    <Container component="main" maxWidth="xs">
      <Box marginTop={4} display="flex" flexDirection="column" alignItems="center">
        <Typography component="h2" variant="h5">
          Log in
        </Typography>

        {isLoading && (
          <Box textAlign="center" mt={2}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ marginTop: 3, width: '100%' }}>
            <AlertTitle>Fehler</AlertTitle>
            {error}
          </Alert>
        )}

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
