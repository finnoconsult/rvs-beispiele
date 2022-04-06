import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Grid } from '@mui/material';
import { ProductCard } from './ProductCard';
import { useLastViewed } from './LastViewedContext';

export function LastViewed({ id }) {
  const { isLoading, error, data } = useQuery('products');
  const { lastViewed, addLastViewed } = useLastViewed();

  useEffect(() => {
    addLastViewed(id);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading || error) return null;

  const lastViewedProducts = lastViewed
    .filter((lvId) => lvId !== id)
    .map((lvId) => data.data.find((product) => product.id === lvId));

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
