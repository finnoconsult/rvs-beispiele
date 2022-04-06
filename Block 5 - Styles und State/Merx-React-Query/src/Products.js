import { useQuery } from 'react-query';
import { Grid, Box, CircularProgress, Alert, AlertTitle } from '@mui/material';
import { ProductCard } from './ProductCard';

export function Products() {
  const { isLoading, error, data } = useQuery('products');

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

  if (data.data.length === 0) return <h1>No Products</h1>;

  return (
    <Grid container spacing={4} mt={0} mb={4}>
      {data.data.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard key={product.id} {...product} />
        </Grid>
      ))}
    </Grid>
  );
}
