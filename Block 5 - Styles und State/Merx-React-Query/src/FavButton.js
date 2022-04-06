import { IconButton } from '@mui/material';
import { FavoriteOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import { useFavourites } from './FavouritesContext';
import { useUser } from './UserContext';

export function FavButton({ id }) {
  const { isLoggedIn } = useUser();
  const { favourites, toggleFav } = useFavourites();
  const isFav = favourites.includes(id);

  return (
    <IconButton onClick={() => toggleFav(id)} color="primary">
      {isLoggedIn ? isFav ? <FavoriteOutlined /> : <FavoriteBorderOutlined /> : null}
    </IconButton>
  );
}
