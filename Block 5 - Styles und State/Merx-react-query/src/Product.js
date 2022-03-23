import { useQuery } from 'react-query';
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
import { ProductCard } from './ProductCard';

export function Product() {
  const params = useParams();
  const { isLoading, error, data } = useQuery(['products', params.id]);

  if (isLoading)
    return (
      <Box textAlign="center" mt={2}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Alert severity="error">
        <AlertTitle>Fehler</AlertTitle>
        {error}
      </Alert>
    );

  return (
    <Box>
      <img src={data.image} alt={data.title} />
      <Typography variant="h5" component="h2">
        {data.title}
      </Typography>

      {data.bodyHtml ? <Typography dangerouslySetInnerHTML={{ __html: data.bodyHtml }} /> : <CircularProgress />}

      <Box display="flex" justifyContent="space-between">
        <FavButton id={data.id} />
        <Price price={data.price} />
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
        {data.related?.map((id) => (
          <Box key={id} width={250}>
            <ProductCard id={id} />
          </Box>
        ))}
      </Box>

      <Typography variant="h4">Zuletzt gesehene Produkte</Typography>
      <LastSeen id={data.id} />
    </Box>
  );
}
