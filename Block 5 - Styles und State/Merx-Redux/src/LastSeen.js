import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { ProductCard } from './ProductCard';
import { LAST_SEEN_ADD } from './store/actions';

export function LastSeen({ products, id }) {
  const dispatch = useDispatch();
  const productMap = products.reduce((obj, p) => ((obj[p.id] = p), obj), {});
  const lastSeen = useSelector((state) => state.lastSeen.map((id) => productMap[id]).slice(1));

  useEffect(() => {
    if (id) dispatch({ type: LAST_SEEN_ADD, id });
  }, [id, dispatch]);

  return (
    <Grid container spacing={4} mt={0} mb={4}>
      {lastSeen.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard key={product.id} {...product} />
        </Grid>
      ))}
    </Grid>
  );
}
