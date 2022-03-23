import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ProductCard } from './ProductCard';
import { loadProducts } from './store/actions';

export function Products() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.products);

  const productIds = Object.keys(data);

  useEffect(() => {
    console.log('useEffect', isLoading, data, productIds.length);
    if (!isLoading && productIds.length === 0) dispatch(loadProducts());
  }, [dispatch, data, isLoading]);

  if (isLoading)
    return (
      <Box textAlign="center" mt={2}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Alert severity="error">
        <AlertTitle>Fehler</AlertTitle>
        {error}
      </Alert>
    );

  if (productIds.length === 0) return <h1>No Products</h1>;

  return (
    <Grid container spacing={4} mt={0} mb={4}>
      {productIds.map((id) => (
        <Grid item key={id} xs={12} sm={6} md={4}>
          <ProductCard key={id} {...data[id]} />
        </Grid>
      ))}
    </Grid>
  );
}
