import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Header } from './Header';
import { Product } from './Product';
import { Products } from './Products';
import { Favourites } from './Favourites';
import { Login } from './Login';
import { theme } from './theme';
import products from './products.json';
import { store, persistor } from './store/store';

export function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <Header />
            <Container as="main" maxWidth="lg">
              <Routes>
                <Route path="/" element={<Products products={products} />} />
                <Route path="/products/:id" element={<Product products={products} />} />
                <Route path="/favourites" element={<Favourites products={products} />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Container>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}
