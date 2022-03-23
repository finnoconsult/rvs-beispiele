import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './user-reducer';
import { lastSeenReducer } from './last-seen-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['lastSeen', 'user'],
};

/* root reducer */
const rootReducer = combineReducers({
  user: userReducer /* user slice mit user reducer */,
  lastSeen: lastSeenReducer,
});

export const reducer = persistReducer(persistConfig, rootReducer);
