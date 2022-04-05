import { Link as RouterLink } from 'react-router-dom';
import { Link, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { FavoriteOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import { Price } from './Price';

export function ProductCard({ id, image, title, body, price, isLoggedIn, favourites, toggleFav }) {
  const url = `/products/${id}`;
  const isFav = favourites.includes(id);

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

        <Typography>{body}</Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 2, pt: 0 }}>
        <IconButton onClick={() => toggleFav(id)} color="primary">
          {isLoggedIn ? isFav ? <FavoriteOutlined /> : <FavoriteBorderOutlined /> : null}
        </IconButton>

        <Price price={price} />
      </CardActions>
    </Card>
  );
}
