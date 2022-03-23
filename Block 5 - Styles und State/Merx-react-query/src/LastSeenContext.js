import { createContext, useContext, useEffect } from 'react';
import { useLocalStorageState } from './useLocalStorageState';

const maxLength = 4;
const defaultValue = [];
const LastSeenContext = createContext(defaultValue);

export const LastSeenProvider = ({ children }) => {
  const [lastSeen, setLastSeen] = useLocalStorageState('last-seen', defaultValue);
  const contextValue = { lastSeen, setLastSeen };
  return <LastSeenContext.Provider value={contextValue}>{children}</LastSeenContext.Provider>;
};

export const useLastSeen = (id) => {
  const { setLastSeen, lastSeen } = useContext(LastSeenContext);
  const withoutCurrent = lastSeen.filter((lid) => lid !== id);

  useEffect(() => {
    if (!id) return;
    const tail = withoutCurrent.slice(0, maxLength);
    setLastSeen([id, ...tail]);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return withoutCurrent;
};
