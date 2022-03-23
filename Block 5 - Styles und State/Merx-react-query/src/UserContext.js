import { createContext, useContext, useState } from 'react';
import { useMutation } from 'react-query';

const defaultValue = { isLoggedIn: false };

const UserContext = createContext(defaultValue);

export function loginMutation(credentials) {
  const headers = { 'Content-Type': 'application/json; charset=UTF-8' };
  const body = JSON.stringify(credentials);
  return fetch('http://localhost:3001/login', { method: 'POST', headers, body })
    .then((response) => response.json())
    .then((json) => json.data);
}

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(defaultValue.isLoggedIn);
  const logout = () => setIsLoggedIn(false);
  const onSuccess = (data) => setIsLoggedIn(!!data);

  const { mutate, isLoading, data, error } = useMutation(loginMutation, { onSuccess });

  const value = {
    login: mutate,
    isLoggedIn,
    logout,
    isLoading,
    data,
    error,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
