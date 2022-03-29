import { useState, useEffect } from 'react';

export function useLocalStorageState(key, initialValue = '') {
  const [value, setValue] = useState(() => JSON.parse(window.localStorage.getItem(key)) ?? initialValue);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
