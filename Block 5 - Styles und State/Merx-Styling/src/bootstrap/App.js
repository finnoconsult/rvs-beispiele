import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Product } from './Product';
import { Products } from './Products';
import { About } from './About';
import products from '../products.json';

export function App() {
  return (
    <BrowserRouter>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <div className="wrapper">
        <div className="container">
          <Header />
        </div>
        <main className="container mt-2">
          <Routes>
            <Route path="/" element={<Products products={products} />} />
            <Route path="/products/:id" element={<Product products={products} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
