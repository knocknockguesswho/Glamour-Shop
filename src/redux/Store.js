import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import promiseMiddleware from 'redux-promise-middleware';

/*
  Waiting for reducers
*/
import rootReducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

/*
  Waiting for rootReducer
*/
const persistedReducer = persistReducer(persistConfig, rootReducers);

let store = createStore(
  persistedReducer,
  applyMiddleware(promiseMiddleware, logger),
);
let persistor = persistStore(store);
export {store, persistor};
