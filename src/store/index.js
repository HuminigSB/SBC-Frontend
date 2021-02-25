import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';

import persistReducers from './persistReducers';
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  : null) || compose;

const store = createStore(persistReducers(rootReducer), composeEnhancers(
    applyMiddleware(sagaMiddleware)
))

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};