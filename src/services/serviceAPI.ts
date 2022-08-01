import apisauce, {ApisauceInstance} from 'apisauce';
import {urls} from '../utils/constants/urls';
import {ILocation} from './types';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-RapidAPI-Key': '01e61f243cmshc95560c1fa1c0c8p16367djsnf473cd3d193b',
  'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
};

let api: ApisauceInstance;
const createApi = (hostUrl: string) => {
  try {
    api = apisauce.create({
      baseURL: hostUrl,
      headers,
      timeout: 10000,
    });
    api.addRequestTransform(request => {
      console.log({URL: request.url, ...request.params});
    });
  } catch (error) {
    console.log({place: 'createApi', error});
  }
  return api;
};
createApi(urls.baseURL());

export const apiWeather = (payload: ILocation) => {
  return api.get(urls.weather(), payload);
};

export const apiWeatherMount = (payload: ILocation) => {
  return api.get(urls.climateMonth(), payload);
};

export const apiWeatherForecast = (payload: ILocation) => {
  return api.get(urls.forecast(), payload);
};
