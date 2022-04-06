import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Alert, AlertTitle } from '@mui/material';
import { Price } from './Price';
import { FavButton } from './FavButton';
import { LastViewed } from './LastViewed';

export function Product() {
  const params = useParams();
  const { isLoading, error, data } = useQuery(`products/${params.id}`);

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

  const product = data.data;

  return (
    <Box>
      <img src={product.image} alt={product.title} />
      <Typography variant="h5" component="h2">
        {product.title}
      </Typography>
      <Typography>{product.excerpt}</Typography>
      <Box display="flex" justifyContent="space-between">
        <FavButton id={product.id} />
        <Price price={product.price} />
      </Box>

      <hr />

      <LastViewed id={product.id} />
    </Box>
  );
}
