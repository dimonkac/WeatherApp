import {createSlice} from '@reduxjs/toolkit';
import {IListMounth, IMain} from '../../services/types';
import {IWeatherSagaAction} from '../sagas/weatherSaga';

interface IAction {
  type: string;
  payload: IWeatherReducer;
}

interface IWeatherReducer {
  condition: IMain | null;
  forecasts: Array<IListMounth> | null;
}

export interface IInitialState {
  isLoading: boolean;
  name: string;
  weatherCurrentDate: IMain | null;
  weatherMounth: Array<IListMounth> | null;
}

const initialState: IInitialState = {
  isLoading: false,
  name: 'Zaporizhzhia',
  weatherCurrentDate: null,
  weatherMounth: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {
    fetchWeather: (state: IInitialState, action: IWeatherSagaAction) => {
      state.isLoading = true;
      action;
    },
    successWeather: (state: IInitialState, action: IAction) => {
      state.weatherCurrentDate = action.payload.condition;
      state.isLoading = false;
    },
    failureWeather: (state: IInitialState) => {
      state.isLoading = false;
    },
    fetchMounthWeather: (state: IInitialState, action: IWeatherSagaAction) => {
      state.isLoading = true;
      action;
    },
    successMounthWeather: (state: IInitialState, action: IAction) => {
      state.weatherMounth = action.payload.forecasts;
      state.isLoading = false;
    },
    failureMounthWeather: (state: IInitialState) => {
      state.isLoading = false;
    },
    // fetchCalendarhWeather: (
    //   state: IInitialState,
    //   action: IWeatherSagaAction,
    // ) => {
    //   state.isLoading = true;
    //   action;
    // },
    // successCalendarhWeather: (state: IInitialState, action: IAction) => {
    //   state.isLoading = false;
    //   state.weatherForecast = action.payload;
    // },
    // failureCalendarhWeather: (state: IInitialState) => {
    //   state.isLoading = false;
    // },
  },
});

export const {
  fetchWeather,
  successWeather,
  failureWeather,
  fetchMounthWeather,
  successMounthWeather,
  failureMounthWeather,
} = weatherSlice.actions;
export default weatherSlice.reducer;
