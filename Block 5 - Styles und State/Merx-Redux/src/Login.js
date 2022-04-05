import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography, TextField, CircularProgress, Button } from '@mui/material/Box';
import { login } from './store/user-reducer';

export function Login() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const credentials = Object.fromEntries(new FormData(event.target));
    dispatch(login(credentials));
  };

  useEffect(() => {
    if (user.isLoggedIn) navigate('/');
  }, [user.isLoggedIn, navigate]);

  if (user.isLoading) return <CircularProgress />;

  return (
    <Container component="main" maxWidth="xs">
      {user.error && <div>{user.error}</div>}
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
