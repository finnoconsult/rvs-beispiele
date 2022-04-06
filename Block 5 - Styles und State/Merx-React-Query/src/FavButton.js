import { useSelector, useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import { FavoriteOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import { FAVOURITES_ADD, FAVOURITES_REMOVE } from './store/actions';

export function FavButton({ id }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const favourites = useSelector((state) => state.favourites);
  const isFav = favourites.includes(id);

  const dispatch = useDispatch();
  const addFav = () => dispatch({ type: FAVOURITES_ADD, payload: { id } });
  const removeFav = () => dispatch({ type: FAVOURITES_REMOVE, payload: { id } });
  const toggleFav = isFav ? removeFav : addFav;

  return (
    <IconButton onClick={toggleFav} color="primary">
      {isLoggedIn ? isFav ? <FavoriteOutlined /> : <FavoriteBorderOutlined /> : null}
    </IconButton>
  );
}
