import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { ProductCard } from './ProductCard';

export function Favourites({ products }) {
  const favourites = useSelector((state) => state.favourites);
  const filteredProducts = products.filter((product) => favourites.includes(product.id));

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
