import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Alert, AlertTitle } from '@mui/material';
import { Price } from './Price';
import { FavButton } from './FavButton';
import { LastViewed } from './LastViewed';
import { loadProduct } from './store/actions';

export function Product() {
  const params = useParams();
  const id = params.id;

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.data[id]);

  useEffect(() => {
    if (!product?.bodyHtml && !product?.isLoading) dispatch(loadProduct(id));
  }, [product?.bodyHtml, product?.isLoading, id, dispatch]);

  if (!product || product.isLoading)
    return (
      <Box textAlign="center" mt={2}>
        <CircularProgress />
      </Box>
    );

  if (product.error)
    return (
      <Alert severity="error">
        <AlertTitle>Fehler</AlertTitle>
        {product.error}
      </Alert>
    );

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
