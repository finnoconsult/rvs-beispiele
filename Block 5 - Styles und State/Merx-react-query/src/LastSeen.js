import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import { ProductCard } from './ProductCard';
import { LAST_SEEN_ADD } from './store/actions';

export function LastSeen({ id }) {
  const dispatch = useDispatch();
  const lastSeen = useSelector((state) => state.lastSeen);
  const { isLoading, error, data } = useQuery('products');

  useEffect(() => {
    if (id) dispatch({ type: LAST_SEEN_ADD, id });
  }, [id, dispatch]);

  if (isLoading || error || !data) return null;

  const lastSeenProducts = lastSeen.map((id) => data.find((p) => p.id === id));

  return (
    <Grid container spacing={4} mt={0} mb={4}>
      {lastSeenProducts.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={3}>
          <ProductCard key={product.id} {...product} />
        </Grid>
      ))}
    </Grid>
  );
}
