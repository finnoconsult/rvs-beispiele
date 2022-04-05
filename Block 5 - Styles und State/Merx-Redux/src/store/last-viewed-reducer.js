import { LAST_VIEWED_ADD } from './actions';

const MAX_SIZE = 4;
const initialState = [];

export function lastViewedReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LAST_VIEWED_ADD: {
      const filtered = state.filter((id) => id !== payload.id);
      return [payload.id, ...filtered].slice(0, MAX_SIZE);
    }
    default:
      return state;
  }
}
