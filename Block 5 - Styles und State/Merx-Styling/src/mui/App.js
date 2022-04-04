import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from './Header';
import { Product } from './Product';
import { Products } from './Products';
import { theme } from './theme';
import products from '../products.json';
import './index.css';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <CssBaseline />
        <div className="container">
          <Header />
        </div>
        <main className="container">
          <Routes>
            <Route path="/" element={<Products products={products} />} />
            <Route path="/products/:id" element={<Product products={products} />} />
          </Routes>
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}
