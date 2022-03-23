import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useFavs } from './FavouritesContext';

export function FavButton({ id }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const { favourites, toggleFavourite } = useFavs();
  const isFavourite = favourites.includes(id);

  if (!isLoggedIn) return <div />;

  return (
    <IconButton onClick={() => toggleFavourite(id)} color="primary">
      {isFavourite ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
    </IconButton>
  );
}
