export const USER_LOADING = 'USER_LOADING';
export const USER_ERROR = 'USER_ERROR';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const PRODUCTS_LOADING = 'PRODUCTS_LOAD';
export const PRODUCTS_ERROR = 'PRODUCTS_ERROR';
export const PRODUCTS_LOADED = 'PRODUCTS_LOADED';

export const PRODUCT_LOADING = 'PRODUCT_LOAD';
export const PRODUCT_ERROR = 'PRODUCT_ERROR';
export const PRODUCT_LOADED = 'PRODUCT_LOADED';

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

export function loadProducts() {
  return async (dispatch) => {
    dispatch({ type: PRODUCTS_LOADING });
    const response = await fetch('http://localhost:3001/products');
    const json = await response.json();
    if (json.success) dispatch({ type: PRODUCTS_LOADED, payload: json.data });
    else dispatch({ type: PRODUCTS_ERROR, payload: json.error });
  };
}

export function loadProduct(id) {
  return async (dispatch) => {
    dispatch({ type: PRODUCT_LOADING, id });
    const response = await fetch(`http://localhost:3001/products/${id}`);
    const json = await response.json();
    if (json.success) dispatch({ type: PRODUCT_LOADED, id, payload: json.data });
    else dispatch({ type: PRODUCT_ERROR, id, payload: json.error });
  };
}
