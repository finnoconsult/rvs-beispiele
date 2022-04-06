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
