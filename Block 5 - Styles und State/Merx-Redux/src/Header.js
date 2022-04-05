import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, AppBar, Badge, Link, Button, IconButton, Toolbar, Typography, Box } from '@mui/material';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { FavButton } from './FavButton';
import { USER_LOGIN, USER_LOGOUT } from './store/actions';

export function Header() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  const login = () => dispatch({ type: USER_LOGIN });
  const logout = () => dispatch({ type: USER_LOGOUT });
  const toggleLogin = isLoggedIn ? logout : login;

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
            <FavButton id="2" />

            <IconButton href="#" color="primary">
              <ShoppingCart />
            </IconButton>

            <IconButton component={RouterLink} to="/favourites" color="primary">
              <Badge badgeContent={favourites.length} color="primary">
                <Favorite />
              </Badge>
            </IconButton>

            <Button onClick={toggleLogin} color="primary" variant="outlined">
              {isLoggedIn ? 'Logout' : 'Login'}
            </Button>
            {/*<Button component={RouterLink} to="/login" color="primary" variant="outlined">
              Login
            </Button>*/}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
