import { createContext, useContext, useReducer } from 'react';

const defaultValue = { isLoggedIn: false };

export function userReducer(state = defaultValue, action) {
  switch (action.type) {
    case 'USER_LOADING':
      return { isLoggedIn: false, isLoading: true };

    case 'USER_ERROR':
      return { isLoggedIn: false, error: action.payload };

    case 'USER_LOGIN': {
      return { isLoggedIn: true, ...action.payload };
    }
    case 'USER_LOGOUT': {
      return { isLoggedIn: false };
    }
    default: {
      return state;
    }
  }
}

export async function login(credentials, dispatch) {
  dispatch({ type: 'USER_LOADING' });

  const headers = { 'Content-Type': 'application/json; charset=UTF-8' };
  const body = JSON.stringify(credentials);
  const response = await fetch('http://localhost:3001/login', { method: 'POST', headers, body });
  const json = await response.json();

  if (json.success) {
    dispatch({ type: 'USER_LOGIN', payload: json.data });
  } else {
    dispatch({ type: 'USER_ERROR', payload: json.error });
  }
}

const UserContext = createContext(defaultValue);

export const UserProvider = ({ children }) => {
  const value = useReducer(userReducer, defaultValue);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
