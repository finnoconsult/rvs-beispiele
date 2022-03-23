import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Price } from './Price';
import { FavButton } from './FavButton';
import { LastSeen } from './LastSeen';
import { loadProduct } from './store/actions';
import { ProductCard } from './ProductCard';

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
      <Typography dangerouslySetInnerHTML={{ __html: product.bodyHtml || product.excerpt }} />
      <Box display="flex" justifyContent="space-between">
        <FavButton id={product.id} />
        <Price price={product.price} />
      </Box>

      {/*<Box display="flex" justifyContent="space-between" alignItems="center">
        <Button color="primary" component={RouterLink} to={`/products/${+product.id - 1 || products.length}`}>
          <ArrowBack /> Vorheriges Produkt
        </Button>

        <Button color="primary" component={RouterLink} to={`/products/${(+product.id % products.length) + 1}`}>
          Nächstes Produkt <ArrowForward />
        </Button>
      </Box>*/}

      <Typography variant="h4">Ähnliche Produkte</Typography>
      <Box display="flex" gap={3} mb={7} mt={3}>
        {product.related?.map((id) => (
          <Box key={id} width={250}>
            <ProductCard id={id} />
          </Box>
        ))}
      </Box>

      <Typography variant="h4">Zuletzt gesehene Produkte</Typography>
      <LastSeen id={product.id} />
    </Box>
  );
}
