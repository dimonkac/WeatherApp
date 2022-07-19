import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WeatherDay} from '../screens/weatherDay';
import {WeatherCalendar} from '../screens/weatherCalendar';
import {WeatherMounth} from '../screens/weatherMount';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCalendarhWeather,
  fetchMounthWeather,
  fetchWeather,
} from '../store/actions/weatherActions';
import SvgRecervation from '../../assets/svg/reservation';
import Mounth from '../../assets/svg/One-mounth';
import Calendar from '../../assets/svg/Calendat-color';
import {IRootReducer} from '../store/reducers';

const Tab = createBottomTabNavigator();

export const RootNavigation = () => {
  const dispatch = useDispatch();
  const {name} = useSelector((state: IRootReducer) => state.weatherReducer);
  useEffect(() => {
    dispatch(fetchWeather({q: name, units: 'metric'}));
    dispatch(fetchMounthWeather({q: name, units: 'metric'}));
    dispatch(fetchCalendarhWeather({q: name, units: 'metric'}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Tab.Navigator initialRouteName="weatherDay">
      <Tab.Screen
        name="Day"
        component={WeatherDay}
        options={{
          tabBarIcon: ({size}) => <SvgRecervation width={size} height={size} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={WeatherCalendar}
        options={{
          tabBarIcon: ({size}) => <Calendar width={size} height={size} />,
        }}
      />
      <Tab.Screen
        name="Mounth"
        component={WeatherMounth}
        options={{
          tabBarIcon: ({size}) => <Mounth width={size} height={size} />,
        }}
      />
    </Tab.Navigator>
  );
};
