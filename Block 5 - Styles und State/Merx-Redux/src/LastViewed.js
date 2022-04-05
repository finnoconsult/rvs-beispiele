import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { ProductCard } from './ProductCard';
import { useEffect } from 'react';
import { LAST_VIEWED_ADD } from './store/actions';

export function LastViewed({ products, id }) {
  const lastViewedIds = useSelector((state) => state.lastViewed);
  const lastViewedProducts = products.filter((product) => lastViewedIds.includes(product.id) && product.id !== id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LAST_VIEWED_ADD, payload: { id } });
  }, [id, dispatch]);

  return (
    <Grid container spacing={4} mt={0} mb={4}>
      {lastViewedProducts.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard key={product.id} {...product} />
        </Grid>
      ))}
    </Grid>
  );
}
