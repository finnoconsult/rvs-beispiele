import { ProductCard } from './ProductCard';

export function Products({ products }) {
  return (
    <div
      style={{
        display: 'grid',
        gap: 24,
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr) )',
      }}
    >
      {products.map((product) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
}
