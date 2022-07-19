import {IListForecast, IListMounth, IMain} from '../../services/types';
import * as types from '../actions/weatherActions';

interface IAction {
  type: string;
  data: IWeatherReducer;
}

interface IWeatherReducer {
  main?: IMain;
  list?: IListMounth | IListForecast;
}

export interface IInitialState {
  isLoading: boolean;
  name: string;
  weatherCurrentDate: IMain | null;
  weatherMounth: Array<IListMounth> | null;
  weatherForecast: Array<IListForecast> | null;
}

const initialState: IInitialState = {
  isLoading: false,
  name: 'Zaporizhzhia',
  weatherCurrentDate: null,
  weatherMounth: null,
  weatherForecast: null,
};

const weatherReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case types.FETCH_WEATHER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.SUCCESS_WEATHER: {
      return {
        ...state,
        weatherCurrentDate: action.data.main,
        isLoading: false,
      };
    }
    case types.FAILURE_WEATHER: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.FETCH_MOUNTH_WEATHER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.SUCCESS_CALENDAR_WEATHER: {
      return {
        ...state,
        weatherForecast: action.data.list,
        isLoading: false,
      };
    }
    case types.FAILURE_MOUNTH_WEATHER: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.FETCH_MOUNTH_WEATHER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.SUCCESS_MOUNTH_WEATHER: {
      return {
        ...state,
        isLoading: false,
        weatherMounth: action.data.list,
      };
    }
    case types.FAILURE_MOUNTH_WEATHER: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
