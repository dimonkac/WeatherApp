import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WeatherDay} from '../screens/WeatherDay';
import {WeatherCalendar} from '../screens/WeatherCalendar';
import {WeatherMounth} from '../screens/WeatherMount';
import {useDispatch, useSelector} from 'react-redux';
import SvgRecervation from '../../assets/svg/reservation';
import Mounth from '../../assets/svg/One-mounth';
import Calendar from '../../assets/svg/Calendat-color';
import {IRootReducer} from '../store/reducers';
import {fetchWeather} from '../store/reducers/weatherReducers';

const Tab = createBottomTabNavigator();

export const RootNavigation = () => {
  const dispatch = useDispatch();
  const {name} = useSelector((state: IRootReducer) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather({location: name, format: 'json', u: 'c'}));
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
