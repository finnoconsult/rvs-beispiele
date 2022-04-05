import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Price } from './Price';
import { FavButton } from './FavButton';
import { LastViewed } from './LastViewed';

export function Product({ products }) {
  const params = useParams();
  const product = products.find((product) => product.id == params.id);

  return (
    <Box>
      <img src={product.image} alt={product.title} />
      <Typography variant="h5" component="h2">
        {product.title}
      </Typography>
      <Typography>{product.body}</Typography>
      <Box display="flex" justifyContent="space-between">
        <FavButton id={product.id} />
        <Price price={product.price} />
      </Box>

      <hr />

      <LastViewed products={products} id={product.id} />
    </Box>
  );
}
