import { useQuery } from 'react-query';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ProductCard } from './ProductCard';
import { useLastSeen } from './LastSeenContext';

function LastSeenProduct({ id }) {
  const { data } = useQuery(['products', id]);

  if (!data) return null;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <ProductCard {...data} />
    </Grid>
  );
}

export function LastSeen({ id }) {
  const lastSeen = useLastSeen(id);

  if (lastSeen.length === 0) return null;

  return (
    <>
      <Typography variant="h5" as="h5" sx={{ marginTop: 4 }}>
        Zuletzt gesehene Produkte
      </Typography>
      <Grid container spacing={4} mt={0} mb={4}>
        {lastSeen.map((id) => (
          <LastSeenProduct key={id} id={id} />
        ))}
      </Grid>
    </>
  );
}
