import { useQuery, useQueryClient } from 'react-query';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ProductCard } from './ProductCard';

export function Products() {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery('products', {
    onSuccess(data) {
      data.forEach((product) =>
        queryClient.setQueryData(['products', product.id], (oldData) => ({ ...oldData, ...product }))
      );
    },
  });

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

  if (data.length === 0) return <h1>Keine Produkte vorhanden</h1>;

  return (
    <Grid container spacing={4} mt={0} mb={4}>
      {data.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard key={product.id} {...product} />
        </Grid>
      ))}
    </Grid>
  );
}
