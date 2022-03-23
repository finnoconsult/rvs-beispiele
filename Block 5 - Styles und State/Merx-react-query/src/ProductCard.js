import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Price } from './Price';
import { FavButton } from './FavButton';
import { loadProduct } from './store/actions';

export function ProductCard({ id }) {
  const url = `/products/${id}`;

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const product = useSelector((state) => state.products.data[id]);

  useEffect(() => {
    if (products.isLoading && !product?.bodyHtml && !product?.isLoading) dispatch(loadProduct(id));
  }, [products.isLoading, product?.bodyHtml, product?.isLoading, id, dispatch]);

  if (!product || product.isLoading) return null;

  return (
    <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Link component={RouterLink} to={url}>
        <CardMedia component="img" image={product.image} alt={product.title} />
      </Link>

      <CardContent sx={{ flexGrow: 1 }}>
        <Link component={RouterLink} to={url}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
        </Link>

        <Typography>{product.body}</Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 2, pt: 0 }}>
        <FavButton id={id} />
        <Price price={product.price} />
      </CardActions>
    </Card>
  );
}
