import { Link as RouterLink } from 'react-router-dom';
import { Container, AppBar, Badge, Link, Button, IconButton, Toolbar, Typography, Box } from '@mui/material';
import { Favorite, ShoppingCart } from '@mui/icons-material';

export function Header({ isLoggedIn, toggleLogin, favourites }) {
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
