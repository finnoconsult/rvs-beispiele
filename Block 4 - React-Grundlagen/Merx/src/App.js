import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Product } from './Product';
import { Products } from './Products';
import { About } from './About';

export function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main className="container mt-2">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
