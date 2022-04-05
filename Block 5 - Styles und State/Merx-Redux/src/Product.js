import { useParams } from 'react-router-dom';
import { Box, IconButton, Typography } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import { Price } from './Price';

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
        <IconButton variant="contained" type="button">
          <Favorite />
        </IconButton>
        <Price price={product.price} />
      </Box>
    </Box>
  );
}
