import { USER_ERROR, USER_LOADING, USER_LOGIN, USER_LOGOUT } from './actions';

const initialState = {
  isLoggedIn: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { isLoggedIn: true, ...action.payload };

    case USER_LOADING:
      return { isLoggedIn: false, isLoading: true };

    case USER_ERROR:
      return { isLoggedIn: false, isLoading: false, error: action.payload };

    case USER_LOGOUT:
      return { isLoggedIn: false };
    default:
      return state;
  }
}

export function login(credentials) {
  return async function thunk(dispatch) {
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };
    const body = JSON.stringify(credentials);

    dispatch({ type: USER_LOADING });

    fetch('http://localhost:3001/login', { method: 'POST', headers, body })
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          dispatch({ type: USER_LOGIN, payload: json.data });
        } else {
          dispatch({ type: USER_ERROR, payload: json.error });
        }
      });
  };
}
