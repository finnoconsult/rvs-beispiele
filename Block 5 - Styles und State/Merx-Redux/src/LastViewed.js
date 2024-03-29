import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { ProductCard } from './ProductCard';
import { useEffect } from 'react';
import { LAST_VIEWED_ADD } from './store/actions';

export function LastViewed({ id }) {
  const products = useSelector((state) => state.products.data);
  const lastViewedIds = useSelector((state) => state.lastViewed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LAST_VIEWED_ADD, payload: { id } });
  }, [id, dispatch]);

  return (
    <Grid container spacing={4} mt={0} mb={4}>
      {lastViewedIds.map((id) => (
        <Grid item key={id} xs={12} sm={6} md={4}>
          <ProductCard key={id} {...products[id]} />
        </Grid>
      ))}
    </Grid>
  );
}
