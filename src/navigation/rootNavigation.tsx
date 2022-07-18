import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WeatherDay} from '../screens/weatherDay';
import {WeatherCalendar} from '../screens/weatherCalendar';
import {WeatherMounth} from '../screens/weatherMount';

const Tab = createBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="weatherDay">
      <Tab.Screen name="weatherDay" component={WeatherDay} />
      <Tab.Screen name="weatherCalendar" component={WeatherCalendar} />
      <Tab.Screen name="weatherMounth" component={WeatherMounth} />
    </Tab.Navigator>
  );
};
