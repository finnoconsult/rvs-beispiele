import { FAVOURITES_ADD, FAVOURITES_REMOVE } from './actions';

const initialFavouritesState = [];

export const favouritesReducer = (state = initialFavouritesState, action) => {
  switch (action.type) {
    case FAVOURITES_ADD: {
      return [...state, action.id];
    }
    case FAVOURITES_REMOVE: {
      return state.filter((id) => id !== action.id);
    }
    default: {
      return state;
    }
  }
};
