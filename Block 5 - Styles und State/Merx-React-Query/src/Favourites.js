import { useQuery } from 'react-query';
import { Grid, Skeleton, Stack } from '@mui/material';
import { ProductCard } from './ProductCard';
import { useFavourites } from './FavouritesContext';

export function Favourites() {
  const { isLoading, error, data } = useQuery('products');
  const { favourites } = useFavourites();

  if (isLoading || error)
    return (
      <Stack spacing={1} width={370} marginTop={3}>
        <Skeleton variant="rectangular" width={370} height={370} />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Stack>
    );

  const favouritsProducts = favourites.map((favId) => data.data.find((product) => product.id === favId));

  return (
    <Grid container spacing={4} mt={0} mb={4}>
      {favouritsProducts.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard key={product.id} {...product} />
        </Grid>
      ))}
    </Grid>
  );
}
