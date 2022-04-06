import { FAVOURITES_ADD, FAVOURITES_REMOVE } from './actions';

const initialState = [];

export function favouritesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FAVOURITES_ADD:
      return [...state, payload.id];
    case FAVOURITES_REMOVE:
      return state.filter((id) => id !== payload.id);
    // case 'USER_LOGOUT':
    //   return initialState;
    default:
      return state;
  }
}
