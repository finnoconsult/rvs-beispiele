import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import { Header } from './Header';
import { Product } from './Product';
import { Products } from './Products';
import { theme } from './theme';
import products from './products.json';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn((b) => !b);
  const [favourites, setFavourites] = useState([]);

  const toggleFav = (id) => {
    if (favourites.includes(id)) setFavourites(favourites.filter((fav) => fav !== id));
    else setFavourites([...favourites, id]);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <Header isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} favourites={favourites} />
        <Container as="main" maxWidth="lg">
          <Routes>
            <Route
              path="/"
              element={
                <Products products={products} isLoggedIn={isLoggedIn} favourites={favourites} toggleFav={toggleFav} />
              }
            />
            <Route path="/products/:id" element={<Product products={products} />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
