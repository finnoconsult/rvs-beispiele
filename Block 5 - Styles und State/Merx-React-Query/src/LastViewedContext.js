import { useContext, createContext } from 'react';
import { useLocalStorageState } from './useLocalStorageState';

const MAX_SIZE = 4;
const initialState = [];

const LastViewedContext = createContext(initialState);

export const useLastViewed = () => useContext(LastViewedContext);

export function LastViewedProvider({ children }) {
  const [lastViewed, setLastViewed] = useLocalStorageState('last-viewed', initialState);

  const addLastViewed = (id) => {
    const filtered = lastViewed.filter((lvId) => lvId !== id);
    return setLastViewed([id, ...filtered].slice(0, MAX_SIZE));
  };

  const value = { lastViewed, addLastViewed };

  return <LastViewedContext.Provider value={value}>{children}</LastViewedContext.Provider>;
}
