import { LAST_SEEN_ADD } from './actions';

const maxLengh = 4;
const initialState = [];

export function lastSeenReducer(state = initialState, action) {
  switch (action.type) {
    case LAST_SEEN_ADD: {
      const tail = state.filter((id) => id !== action.id).slice(0, maxLengh);
      return [action.id, ...tail];
    }
    default: {
      return state;
    }
  }
}
