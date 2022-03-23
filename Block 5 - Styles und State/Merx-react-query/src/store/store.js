import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { reducer } from './reducer';

// export const store = createStore(reducer, applyMiddleware(thunk));
export const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export const persistor = persistStore(store);
