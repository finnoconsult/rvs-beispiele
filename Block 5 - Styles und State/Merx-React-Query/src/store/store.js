import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { userReducer } from './user-reducer';
import { lastViewedReducer } from './last-viewed-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  lastViewed: lastViewedReducer,
});

const persistConfig = {
  key: 'merx',
  storage,
  whitelist: ['lastViewed'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);

export const persistor = persistStore(store);
