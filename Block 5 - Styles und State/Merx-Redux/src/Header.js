import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  AppBar,
  Badge,
  Link,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { USER_LOGOUT } from './store/actions';

export function Header() {
  const user = useSelector((state) => state.user);
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  const logout = () => dispatch({ type: USER_LOGOUT });

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link color="primary" underline="none" component={RouterLink} to="/">
            <Typography as="h1" variant="h4" color="primary" flexGrow={1}>
              Merx
            </Typography>
          </Link>

          <Box as="nav" display="flex" alignItems="center" gap={2}>
            <IconButton href="#" color="primary">
              <ShoppingCart />
            </IconButton>

            <IconButton component={RouterLink} to="/favourites" color="primary">
              <Badge badgeContent={favourites.length} color="primary">
                <Favorite />
              </Badge>
            </IconButton>

            {user.isLoggedIn ? (
              <Button onClick={logout} color="primary" variant="outlined">
                {user.name}
              </Button>
            ) : user.isLoading ? (
              <CircularProgress />
            ) : (
              <Button component={RouterLink} to="/login" color="primary" variant="outlined">
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
