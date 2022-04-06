import { useContext, createContext } from 'react';
import { useLocalStorageState } from './useLocalStorageState';

const initialState = [];

const FavouritesContext = createContext(initialState);

export const useFavourites = () => useContext(FavouritesContext);

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorageState('favourites', initialState);

  const toggleFav = (id) => {
    if (favourites.includes(id)) setFavourites(favourites.filter((favId) => id !== favId));
    else setFavourites([...favourites, id]);
  };

  const value = { favourites, toggleFav };

  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
}
