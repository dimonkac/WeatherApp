import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import {IInitialState, weatherSlice} from './weatherReducers';

export interface IRootReducer {
  weather: IInitialState;
}

const rootReducer = combineReducers({weather: weatherSlice.reducer});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
