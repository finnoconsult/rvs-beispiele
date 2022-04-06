import { Link as RouterLink } from 'react-router-dom';
import { Container, AppBar, Badge, Link, IconButton, Toolbar, Typography, Box, Select, MenuItem } from '@mui/material';
import { Favorite, ShoppingCart } from '@mui/icons-material';
import { AuthButton } from './AuthButton';
import { useLanguage } from './LanguageContext';
import { useFavourites } from './FavouritesContext';

export function Header() {
  const { favourites } = useFavourites();
  const { language, setLanguage } = useLanguage();
  const handleLocaleChange = (event) => setLanguage(event.target.value);

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
            <Select label="Locale" value={language} onChange={handleLocaleChange} sx={{ height: 32 }}>
              <MenuItem value="de">DE</MenuItem>
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="fr">FR</MenuItem>
            </Select>

            <IconButton href="#" color="primary">
              <ShoppingCart />
            </IconButton>

            <IconButton component={RouterLink} to="/favourites" color="primary">
              <Badge badgeContent={favourites.length} color="primary">
                <Favorite />
              </Badge>
            </IconButton>

            <AuthButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
