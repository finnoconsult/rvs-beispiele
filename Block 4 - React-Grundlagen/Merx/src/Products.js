import { ErrorBoundary } from 'react-error-boundary';
import { useApi, STATES } from './useApi';
import { ProductCard } from './ProductCard';
import { ErrorFallback } from './ErrorFallback';
import { API_URL } from './config';

export function Products() {
  const { status, error, data } = useApi(API_URL);

  if (status === STATES.LOADING)
    return (
      <div className="text-center mt-5 mb-5">
        <div className="spinner-grow text-secondary" />
      </div>
    );

  if (status === STATES.ERROR)
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );

  if (!data) return null;

  return (
    <div
      style={{
        display: 'grid',
        gap: 24,
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr) )',
      }}
    >
      {data.map((product) => (
        <ErrorBoundary key={product.id} FallbackComponent={ErrorFallback}>
          <ProductCard {...product} />
        </ErrorBoundary>
      ))}
    </div>
  );
}
