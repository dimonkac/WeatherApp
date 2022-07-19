import {applyMiddleware, combineReducers} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import weatherReducer, {IInitialState} from './weatherReducers';

export interface IRootReducer {
  weatherReducer: IInitialState;
}

const rootReducer = combineReducers({weatherReducer});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
