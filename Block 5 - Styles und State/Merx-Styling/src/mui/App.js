import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Header } from './Header';
import { Product } from './Product';
import { Products } from './Products';
import products from '../products.json';
import './index.css';

export function App() {
  return (
    <BrowserRouter>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Container>
        <Header />
      </Container>
      <Container as="main">
        <Routes>
          <Route path="/" element={<Products products={products} />} />
          <Route path="/products/:id" element={<Product products={products} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
