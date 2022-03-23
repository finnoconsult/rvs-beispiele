import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';
import { Price } from './Price';
import { FavButton } from './FavButton';
import { LastSeen } from './LastSeen';
import { ProductCard } from './ProductCard';

function RelatedProduct({ id }) {
  const { data } = useQuery(['products', id]);

  if (!data) return null;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <ProductCard {...data} />
    </Grid>
  );
}

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
      <img src={data.image} alt={data.title} style={{ maxWidth: 400 }} />
      <Typography variant="h5" component="h2">
        {data.title}
      </Typography>

      {data.bodyHtml ? <Typography dangerouslySetInnerHTML={{ __html: data.bodyHtml }} /> : <CircularProgress />}

      <Box display="flex" justifyContent="space-between">
        <FavButton id={data.id} />
        <Price price={data.price} />
      </Box>

      <Typography variant="h5" as="h5" sx={{ marginTop: 4 }}>
        Ähnliche Produkte
      </Typography>

      <Grid container spacing={4} mt={0} mb={4}>
        {data.related?.map((id) => (
          <RelatedProduct key={id} id={id} />
        ))}
      </Grid>

      <LastSeen id={data.id} />
    </Box>
  );
}
