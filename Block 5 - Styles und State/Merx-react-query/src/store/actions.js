export const USER_LOADING = 'USER_LOADING';
export const USER_ERROR = 'USER_ERROR';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const FAVOURITES_ADD = 'FAVOURITES_ADD';
export const FAVOURITES_REMOVE = 'FAVOURITES_REMOVE';

export const LAST_SEEN_ADD = 'LAST_SEEN_ADD';

export function login(credentials) {
  return async (dispatch) => {
    dispatch({ type: USER_LOADING });

    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };
    const body = JSON.stringify(credentials);
    const response = await fetch('http://localhost:3001/login', { method: 'POST', headers, body });
    const json = await response.json();

    if (json.success) {
      dispatch({ type: USER_LOGIN, payload: json.data });
    } else {
      dispatch({ type: USER_ERROR, payload: json.error });
    }
  };
}
