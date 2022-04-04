import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Product } from './Product';
import { Products } from './Products';
import products from '../products.json';
import './index.scss';

export function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
      </div>
      <main className="container">
        <Routes>
          <Route path="/" element={<Products products={products} />} />
          <Route path="/products/:id" element={<Product products={products} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
