import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import Morning from '../../assets/svg/Morning';
import Temperature from '../../assets/svg/Medium-temperature';
import {timeConverter} from '../utils/timeConverter';
import {IRootReducer} from '../store/reducers';

export const WeatherDay = () => {
  const {name, weatherCurrentDate, weatherMounth, isLoading} = useSelector(
    (state: IRootReducer) => state.weatherReducer,
  );

  return !isLoading ? (
    <View style={styles.main}>
      <View style={styles.card}>
        <Morning width={145} height={145} />
        <Text style={styles.city}>{name}</Text>
        <View style={styles.temperatureCard}>
          <Temperature width={45} height={45} />
          {weatherCurrentDate && (
            <Text style={styles.temperature}>
              t = {weatherCurrentDate.temp}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.list}>
        {weatherMounth && (
          <FlatList
            data={weatherMounth.slice(0, 5)}
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
  ) : (
    <ActivityIndicator size="large" color="#00ff00" />
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  card: {
    borderWidth: 1,
    flex: 2,
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
