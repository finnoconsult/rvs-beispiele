import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Price } from './Price';
import { FavButton } from './FavButton';

export function ProductCard({ id, title, image, price, excerpt }) {
  const url = `/products/${id}`;

  return (
    <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Link component={RouterLink} to={url}>
        <CardMedia component="img" image={image} alt={title} />
      </Link>

      <CardContent sx={{ flexGrow: 1 }}>
        <Link component={RouterLink} to={url}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </Link>

        <Typography>{excerpt}</Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 2, pt: 0 }}>
        <FavButton id={id} />
        <Price price={price} />
      </CardActions>
    </Card>
  );
}
