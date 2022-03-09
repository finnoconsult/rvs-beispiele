import { useState } from 'react';
import { Header } from './Header';
import { Product } from './Product';
import { Products } from './Products';

export function App() {
  const [productId, setProductId] = useState(null);

  return (
    <div className="wrapper">
      <Header />

      <main className="container mt-2">
        {productId ? <Product id={productId} /> : <Products showProduct={setProductId} />}
      </main>
    </div>
  );
}
