import { Grid } from '@mui/material';
import { ProductCard } from './ProductCard';

export function Products({ products, isLoggedIn, toggleFav, favourites }) {
  return (
    <Grid container spacing={4} mt={0} mb={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard
            key={product.id}
            {...product}
            isLoggedIn={isLoggedIn}
            toggleFav={toggleFav}
            favourites={favourites}
          />
        </Grid>
      ))}
    </Grid>
  );
}
