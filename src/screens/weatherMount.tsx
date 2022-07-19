import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IRootReducer} from '../store/reducers';
import {timeConverter} from '../utils/timeConverter';

export const WeatherMounth = () => {
  const {name, weatherMounth} = useSelector(
    (state: IRootReducer) => state.weatherReducer,
  );
  return (
    <View style={styles.main}>
      <Text>Monthly weather in {name}</Text>
      <View style={styles.list}>
        {weatherMounth && (
          <FlatList
            data={weatherMounth}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => `${item.dt}` + `${item.humidit}`}
            renderItem={item => (
              <View style={styles.smallCard}>
                <Text>{timeConverter(item.item.dt)}</Text>
                <Text>t = {item.item.temp.average}</Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  card: {
    borderWidth: 1,
    flex: 1,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  smallCard: {
    minWidth: '94%',
    alignItems: 'center',
    marginTop: 4,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 4,
  },
  city: {
    fontSize: 24,
    marginBottom: 5,
  },
  temperatureCard: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  temperature: {
    fontSize: 20,
  },
});
