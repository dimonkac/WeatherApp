export interface ILocation {
  q: string;
  units?: string;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface IListMounth {
  dt: number;
  humidit: number;
  pressur: number;
  wind_spee: number;
  temp: ITemp;
}

export interface IListForecast {
  dt: number;
  visibility: number;
  pop: number;
  dt_txt: string;
  main: any;
  weather: any;
  cloums: any;
  sus: any;
}

interface ITemp {
  average: number;
  average_max: number;
  average_min: number;
  record_max: number;
  record_min: number;
}
