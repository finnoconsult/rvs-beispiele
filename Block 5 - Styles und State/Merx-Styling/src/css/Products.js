import { ProductCard } from './ProductCard';

export function Products({ products }) {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
