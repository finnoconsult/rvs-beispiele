import { useQuery } from 'react-query';
import Grid from '@mui/material/Grid';
import { ProductCard } from './ProductCard';
import { useFavs } from './FavouritesContext';

export function Favourites() {
  const { isLoading, error, data } = useQuery('products');
  const { favourites } = useFavs();

  if (isLoading || error || !data) return null;

  const filteredProducts = data.filter((product) => favourites.includes(product.id));

  if (filteredProducts.length === 0) return <h1>Keine Favouriten vorhanden</h1>;

  return (
    <Grid container spacing={4} mt={0} mb={4}>
      {filteredProducts.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard key={product.id} {...product} />
        </Grid>
      ))}
    </Grid>
  );
}
