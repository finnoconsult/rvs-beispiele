import {
  PRODUCTS_LOADING,
  PRODUCTS_ERROR,
  PRODUCTS_LOADED,
  PRODUCT_LOADING,
  PRODUCT_ERROR,
  PRODUCT_LOADED,
} from './actions';

const initialState = {
  isLoading: false,
  data: {},
  error: null,
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_LOADING: {
      return { ...state, isLoading: true, error: null };
    }

    case PRODUCTS_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    case PRODUCTS_LOADED: {
      const productMap = action.payload.reduce((obj, p) => ((obj[p.id] = p), obj), {}); // eslint-disable-line no-sequences
      return { isLoading: false, data: { ...productMap, ...state.data } };
    }

    case PRODUCT_LOADING: {
      const newProduct = { [action.id]: { ...state.data[action.id], isLoading: true } };
      return { ...state, data: { ...state.data, ...newProduct } };
    }

    case PRODUCT_ERROR: {
      const newProduct = { [action.id]: { ...state.data[action.id], isLoading: false, error: action.payload } };
      return { ...state, data: { ...state.data, ...newProduct } };
    }

    case PRODUCT_LOADED: {
      const newProduct = { [action.id]: action.payload };
      return { ...state, data: { ...state.data, ...newProduct } };
    }

    default: {
      return state;
    }
  }
}
