import { useQuery } from 'react-query';
import { Grid } from '@mui/material';
import { ProductCard } from './ProductCard';
import { useFavourites } from './FavouritesContext';

export function Favourites() {
  const { isLoading, error, data } = useQuery('products');
  const { favourites } = useFavourites();

  if (isLoading || error) return null;

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
