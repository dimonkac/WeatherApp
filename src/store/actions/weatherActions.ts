import {
  IListForecast,
  IListMounth,
  ILocation,
  IMain,
} from '../../services/types';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SUCCESS_WEATHER = 'SUCCESS_WEATHER';
export const FAILURE_WEATHER = 'FAILURE_WEATHER';

export const fetchWeather = (data: ILocation) => ({
  type: FETCH_WEATHER,
  data,
});

export const successWeather = (data: IMain) => ({
  type: SUCCESS_WEATHER,
  data,
});

export const failureWeather = () => ({
  type: FAILURE_WEATHER,
});

export const FETCH_MOUNTH_WEATHER = 'FETCH_MOUNTH_WEATHER';
export const SUCCESS_MOUNTH_WEATHER = 'SUCCESS_MOUNTH_WEATHER';
export const FAILURE_MOUNTH_WEATHER = 'FAILURE_MOUNTH_WEATHER';

export const fetchMounthWeather = (data: ILocation) => ({
  type: FETCH_MOUNTH_WEATHER,
  data,
});

export const successMounthWeather = (data: IListMounth) => ({
  type: SUCCESS_MOUNTH_WEATHER,
  data,
});

export const failureMounthWeather = () => ({
  type: FAILURE_MOUNTH_WEATHER,
});

export const FETCH_CALENDAR_WEATHER = 'FETCH_CALENDAR_WEATHER';
export const SUCCESS_CALENDAR_WEATHER = 'SUCCESS_CALENDAR_WEATHER';
export const FAILURE_CALENDAR_WEATHER = 'FAILURE_CALENDAR_WEATHER';

export const fetchCalendarhWeather = (data: ILocation) => ({
  type: FETCH_CALENDAR_WEATHER,
  data,
});

export const successCalendarhWeather = (data: IListForecast) => ({
  type: SUCCESS_CALENDAR_WEATHER,
  data,
});

export const failureCalendarhWeather = () => ({
  type: FAILURE_CALENDAR_WEATHER,
});
