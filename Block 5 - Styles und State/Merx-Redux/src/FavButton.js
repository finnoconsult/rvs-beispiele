import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { FAVOURITES_ADD, FAVOURITES_REMOVE } from './store/actions';

export function FavButton({ id }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isFavourite = useSelector((state) => state.favourites.includes(id));

  const dispatch = useDispatch();
  const addFavourite = () => dispatch({ type: FAVOURITES_ADD, id });
  const removeFavourite = () => dispatch({ type: FAVOURITES_REMOVE, id });
  const toggleFavourite = isFavourite ? removeFavourite : addFavourite;

  if (!isLoggedIn) return <div />;

  return (
    <IconButton onClick={() => toggleFavourite(id)} color="primary">
      {isFavourite ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
    </IconButton>
  );
}
