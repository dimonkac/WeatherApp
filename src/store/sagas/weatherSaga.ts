import {all, put, takeLatest} from 'redux-saga/effects';
import {apiWeather} from '../../services/serviceAPI';
import {ILocation} from '../../services/types';
import {
  failureWeather,
  successMounthWeather,
  successWeather,
} from '../reducers/weatherReducers';

export interface IWeatherSagaAction {
  payload: ILocation;
}
interface IResponseGenerator {
  config?: any;
  data: any;
  duration: number;
  headers?: any;
  ok: boolean;
  originalError?: any;
  problem?: any;
  status?: number;
}

export function* weatherDaySaga(action: IWeatherSagaAction) {
  console.log(action);
  try {
    const response: IResponseGenerator = yield apiWeather({
      location: 'Zaporizhzhia',
      format: 'json',
      u: 'c',
    });
    console.log('reaponse', response);
    if (response?.status === 200) {
      console.log(response);
      yield put(successWeather(response.data.current_observation));
      yield put(successMounthWeather(response.data));
    } else {
      yield put(failureWeather());
    }
  } catch (e) {
    console.log('weatherSaga', e);
    yield put(failureWeather());
  }
}

// export function* weatherMounthSaga(action: IWeatherSagaAction) {
//   try {
//     const response: IResponseGenerator = yield apiWeatherMount({
//       q: action.payload.q,
//       units: action.payload.units,
//     });
//     if (response?.status === 200) {
//       yield put(successMounthWeather(response.data));
//     } else {
//       yield put(failureMounthWeather());
//     }
//   } catch (error) {
//     console.log(error);
//     yield put(failureMounthWeather());
//   }
// }

// export function* weatherCalendarSaga(action: IWeatherSagaAction) {
//   try {
//     const response: IResponseGenerator = yield apiWeatherForecast({
//       q: action.payload.q,
//     });
//     console.log(response);
//     if (response.status === 200) {
//       yield put(successCalendarhWeather(response.data));
//     } else {
//       yield put(failureCalendarhWeather());
//     }
//   } catch (error) {
//     console.log('calendar saga', error);
//   }
// }

export function* watchWeatherSaga() {
  yield all([takeLatest('weather/fetchWeather' as any, weatherDaySaga)]);
  // yield all([
  //   takeLatest('weather/fetchMounthWeather' as any, weatherMounthSaga),
  // ]);
  // yield all([
  //   takeLatest('weather/fetchCalendarhWeather' as any, weatherCalendarSaga),
  // ]);
}
