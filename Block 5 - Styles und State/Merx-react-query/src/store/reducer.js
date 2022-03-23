import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './user-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

/* root reducer */
const rootReducer = combineReducers({
  user: userReducer /* user slice mit user reducer */,
});

export const reducer = persistReducer(persistConfig, rootReducer);
