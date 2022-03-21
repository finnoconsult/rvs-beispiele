import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Product } from './Product';
import { Products } from './Products';
import products from '../products.json';
import './index.css';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<Products products={products} />} />
          <Route path="/products/:id" element={<Product products={products} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
