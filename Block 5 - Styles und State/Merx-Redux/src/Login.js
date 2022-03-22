import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { login } from './store/actions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onSubmit = async (event) => {
    event.preventDefault();
    const credentials = Object.fromEntries(new FormData(event.target));
    dispatch(login(credentials));
  };

  // wenn wir eingeloggt sind, navigiere zur startseite
  useEffect(() => {
    if (user.isLoggedIn) navigate('/');
  }, [user.isLoggedIn, navigate]);

  // während wir auf den server warten, zeigen wir einen spinner
  if (user.isLoading) return <CircularProgress />;

  return (
    <Container component="main" maxWidth="xs">
      {user.error && <div>error: {user.error}</div>}
      <Box marginTop={4} display="flex" flexDirection="column" alignItems="center">
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
