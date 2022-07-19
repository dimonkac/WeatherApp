import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useSelector} from 'react-redux';
import {IListMounth} from '../services/types';
import {IRootReducer} from '../store/reducers';
import {timeConverter} from '../utils/timeConverter';

export const WeatherCalendar = () => {
  const [choozen, setChoozen] = useState<any>([]);
  const {weatherMounth, isLoading} = useSelector(
    (state: IRootReducer) => state.weatherReducer,
  );
  const displayDay = (day: string) => {
    const filterDay = weatherMounth?.filter(
      (item: IListMounth) => timeConverter(item.dt) === day,
    );
    if (timeConverter(choozen[0]?.dt) !== day) {
      setChoozen(filterDay);
    } else {
      setChoozen([]);
    }
  };

  return weatherMounth && !isLoading ? (
    <View style={styles.main}>
      <Text>WeatherCalendar</Text>
      <Calendar
        current={`${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}`}
        minDate={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
          new Date().getDate() + 1
        }`}
        maxDate={timeConverter(weatherMounth[29].dt)}
        onDayPress={day => {
          displayDay(day.dateString);
        }}
        monthFormat={'yyyy-MMMM'}
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        enableSwipeMonths={true}
      />
      {choozen.length ? (
        <View style={styles.detailCard}>
          <Text style={styles.text}>date: {timeConverter(choozen[0].dt)}</Text>
          <Text style={styles.text}>t = {choozen[0].temp.average}</Text>
          <Text style={styles.text}>
            t(max) = {choozen[0].temp.average_max}
          </Text>
          <Text style={styles.text}>
            t(min) = {choozen[0].temp.average_min}
          </Text>
        </View>
      ) : null}
    </View>
  ) : (
    <ActivityIndicator size="large" color="#00ff00" />
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  detailCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
