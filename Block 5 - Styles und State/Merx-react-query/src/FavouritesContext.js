import { createContext, useContext } from 'react';
import { useLocalStorageState } from './useLocalStorageState';

const defaultValue = [];
const FavouritesContext = createContext(defaultValue);

export const FavouritesConsumer = FavouritesContext.Consumer;

export const FavouritesProvider = ({ value, children }) => {
  const [favourites, setFavourites] = useLocalStorageState('favourites', defaultValue);
  const addFavourite = (id) => setFavourites([...favourites, id]);
  const removeFavourite = (id) => setFavourites(favourites.filter((favId) => favId !== id));
  const toggleFavourite = (id) => (favourites.includes(id) ? removeFavourite(id) : addFavourite(id));

  const contextValue = {
    ...value,
    favourites,
    addFavourite,
    removeFavourite,
    toggleFavourite,
  };

  return <FavouritesContext.Provider value={contextValue}>{children}</FavouritesContext.Provider>;
};

export const useFavs = () => useContext(FavouritesContext);
