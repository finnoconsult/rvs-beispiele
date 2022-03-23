import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AuthButton } from './AuthButton';

export function Header() {
  const numberOfFavourites = useSelector((state) => state.favourites.length);

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
              <ShoppingCartIcon />
            </IconButton>

            <IconButton component={RouterLink} to="/favourites" color="primary">
              <Badge badgeContent={numberOfFavourites} color="default">
                <FavoriteIcon />
              </Badge>
            </IconButton>

            <AuthButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
