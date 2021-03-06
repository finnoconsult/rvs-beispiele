import React from 'react';
import { Switch, Route, Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Imprint from './Imprint';
import Login from './Login';
import Favourites from './Favourites';
import Products from './Products';
import ProductDetails from './ProductDetails';
import PrivateRoute from './PrivateRoute';
import { useFavs } from './FavouritesContext';
import { useUser } from './UserContext';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    backgroundColor: theme.palette.background.default,
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function App() {
  const classes = useStyles();
  const { favourites } = useFavs();
  const { isLoggedIn, logout } = useUser();

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <HomeIcon color="primary" className={classes.icon} />
          <Typography
            variant="h6"
            color="primary"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link component={RouterLink} color="inherit" to="/">
              Merx
            </Link>
          </Typography>{' '}
          {isLoggedIn && (
            <IconButton component={RouterLink} to="/favourites" color="primary">
              <Badge badgeContent={favourites.length} color="primary">
                <FavoriteBorderOutlinedIcon color="primary" />
              </Badge>
            </IconButton>
          )}
          <IconButton href="#" color="primary">
            <ShoppingCartOutlinedIcon color="primary" />
          </IconButton>
          {isLoggedIn ? (
            <Button
              onClick={logout}
              color="primary"
              variant="outlined"
              className={classes.link}
            >
              Logout
            </Button>
          ) : (
            <Button
              component={RouterLink}
              to="/login"
              color="primary"
              variant="outlined"
              className={classes.link}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Switch>
            <Route path="/imprint" component={Imprint} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/favourites" component={Favourites} />
            <Route
              path="/products/:id"
              render={({ match }) => <ProductDetails id={match.params.id} />}
            />
            <Route path="/" component={Products} />
            <Route render={() => <span>404 Not Found Fehlerseite</span>} />
          </Switch>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Merx 2020
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          <Link component={RouterLink} color="inherit" to="/imprint">
            Imprint
          </Link>
          {' | '}
          <Link color="inherit" href="/">
            Privacy
          </Link>
        </Typography>
      </footer>
    </React.Fragment>
  );
}

export default App;
