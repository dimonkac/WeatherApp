import {all, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions/weatherActions';
import {
  apiWeather,
  apiWeatherForecast,
  apiWeatherMount,
} from '../../services/serviceAPI';
import {ILocation} from '../../services/types';

interface IWeatherSagaAction {
  data: ILocation;
}
interface IResponseGenerator {
  config?: any;
  data?: any;
  duration: number;
  headers?: any;
  ok: boolean;
  originalError?: any;
  problem?: any;
  status?: number;
}

export function* weatherDaySaga(action: IWeatherSagaAction) {
  try {
    const response: IResponseGenerator = yield apiWeather({
      q: action.data.q,
      units: action.data.units,
    });
    if (response.status === 200) {
      yield put(actions.successWeather(response.data));
    } else {
      yield put(actions.failureWeather());
    }
  } catch (e) {
    console.log('weatherSaga', e);
    yield put(actions.failureWeather());
  }
}

export function* weatherMounthSaga(action: IWeatherSagaAction) {
  try {
    const response: IResponseGenerator = yield apiWeatherMount({
      q: action.data.q,
      units: action.data.units,
    });
    if (response?.status === 200) {
      yield put(actions.successMounthWeather(response.data));
    } else {
      yield put(actions.failureMounthWeather());
    }
  } catch (error) {
    console.log(error);
    yield put(actions.failureMounthWeather());
  }
}

export function* weatherCalendarSaga(action: IWeatherSagaAction) {
  try {
    const response: IResponseGenerator = yield apiWeatherForecast({
      q: action.data.q,
    });
    console.log(response);
    if (response.status === 200) {
      yield put(actions.successCalendarhWeather(response.data));
    } else {
      yield put(actions.failureCalendarhWeather());
    }
  } catch (error) {
    console.log('calendar saga', error);
  }
}

export function* watchWeatherSaga() {
  yield all([takeLatest(actions.FETCH_WEATHER as any, weatherDaySaga)]);
  yield all([
    takeLatest(actions.FETCH_MOUNTH_WEATHER as any, weatherMounthSaga),
  ]);
  yield all([
    takeLatest(actions.FETCH_CALENDAR_WEATHER as any, weatherCalendarSaga),
  ]);
}
