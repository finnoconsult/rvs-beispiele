import { Link as RouterLink, useParams } from 'react-router-dom';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Price } from './Price';
import { FavButton } from './FavButton';

export function Product({ products }) {
  const params = useParams();
  const product = products.find((product) => product.id === params.id);

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

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Link
          color="primary"
          underline="none"
          component={RouterLink}
          to={`/products/${+product.id - 1 || products.length}`}
        >
          <ArrowBack /> Vorheriges Produkt
        </Link>

        <Link
          color="primary"
          underline="none"
          component={RouterLink}
          to={`/products/${(+product.id % products.length) + 1}`}
        >
          Nächstes Produkt <ArrowForward />
        </Link>
      </Box>
    </Box>
  );
}
