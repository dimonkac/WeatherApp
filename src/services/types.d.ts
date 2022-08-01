export interface ILocation {
  location: string;
  format: string;
  u: string;
}

export interface IMain {
  code: number;
  text: string;
  temperature: number;
}

export interface IListMounth {
  day: string;
  date: number;
  low: number;
  high: number;
  text: string;
  code: number;
}

export interface IBigCardProps {
  choozen?: IListMounth;
}

export interface ISmallCard {
  item: IListMounth;
}
