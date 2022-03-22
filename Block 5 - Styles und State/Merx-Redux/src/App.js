import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Header } from './Header';
import { Product } from './Product';
import { Products } from './Products';
import { theme } from './theme';
import products from './products.json';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <Header />
        <Container as="main" maxWidth="lg">
          <Routes>
            <Route path="/" element={<Products products={products} />} />
            <Route path="/products/:id" element={<Product products={products} />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
