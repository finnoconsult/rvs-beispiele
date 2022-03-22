import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './user-reducer';
import { favouritesReducer } from './favourites-reducer';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['favourites'],
};

/* root reducer */
const rootReducer = combineReducers({
  user: userReducer /* user slice mit user reducer */,
  favourites: favouritesReducer /* favourites slice mit favourites reducer */,
});

export const reducer = persistReducer(persistConfig, rootReducer);
