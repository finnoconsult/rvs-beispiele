import { useState, useContext, createContext } from 'react';
import { useMutation } from 'react-query';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export async function loginMutation(credentials) {
  const headers = { 'Content-Type': 'application/json; charset=UTF-8' };
  const body = JSON.stringify(credentials);
  const response = await fetch('http://localhost:3001/login', { method: 'POST', headers, body });
  const json = await response.json();
  if (json.success) return json.data;
  throw json.error;
}

export function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onSuccess = (data) => setIsLoggedIn(!!data);
  const logout = () => setIsLoggedIn(false);
  const { data, error, isLoading, mutate } = useMutation(loginMutation, { onSuccess });

  const value = {
    isLoggedIn,
    login: mutate,
    logout,
    data,
    error,
    isLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
