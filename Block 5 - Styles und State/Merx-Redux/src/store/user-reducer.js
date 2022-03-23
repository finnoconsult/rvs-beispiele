import { USER_LOADING, USER_ERROR, USER_LOGIN, USER_LOGOUT } from './actions';

const initialUserState = { isLoggedIn: false };

export function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case USER_LOADING:
      return { isLoggedIn: false, isLoading: true };

    case USER_ERROR:
      return { isLoggedIn: false, error: action.payload };

    case USER_LOGIN: {
      return { isLoggedIn: true, ...action.payload };
    }
    case USER_LOGOUT: {
      return { isLoggedIn: false };
    }
    default: {
      return state;
    }
  }
}
