import React, {useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useSelector} from 'react-redux';
import {BigCard} from '../components/BigCard';
import {IListMounth} from '../services/types';
import {IRootReducer} from '../store/reducers';
import {timeConverter} from '../utils/timeConverter';
import {styles} from './styles';

export const WeatherCalendar = () => {
  const [choozen, setChoozen] = useState<any>([]);
  const {weatherMounth, isLoading} = useSelector(
    (state: IRootReducer) => state.weather,
  );
  const displayDay = (day: string) => {
    const filterDay = weatherMounth?.filter(
      (item: IListMounth) => timeConverter(item.date) === day,
    );
    if (timeConverter(choozen[0]?.date) !== day) {
      setChoozen(filterDay);
    } else {
      setChoozen([]);
    }
  };

  return weatherMounth && !isLoading ? (
    <View style={styles.main}>
      <Text>WeatherCalendar</Text>
      <Calendar
        minDate={timeConverter(weatherMounth[0].date)}
        maxDate={timeConverter(weatherMounth[10].date)}
        onDayPress={day => {
          displayDay(day.dateString);
        }}
        monthFormat={'yyyy-MMMM'}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        enableSwipeMonths={true}
      />
      {choozen.length ? <BigCard choozen={choozen[0]} /> : null}
    </View>
  ) : (
    <ActivityIndicator size="large" color="#00ff00" />
  );
};
