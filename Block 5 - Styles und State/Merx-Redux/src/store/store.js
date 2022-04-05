import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { userReducer } from './user-reducer';
import { favouritesReducer } from './favourites-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  favourites: favouritesReducer,
});

const persistConfig = {
  key: 'merx',
  storage,
  // whitelist: ['favourites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
