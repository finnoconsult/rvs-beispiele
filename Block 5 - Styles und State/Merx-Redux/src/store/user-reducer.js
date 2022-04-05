import { USER_LOGIN, USER_LOGOUT } from './actions';

const initialState = {
  isLoggedIn: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { isLoggedIn: true };
    case USER_LOGOUT:
      return { isLoggedIn: false };
    default:
      return state;
  }
}
