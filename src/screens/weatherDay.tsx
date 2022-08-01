import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import Morning from '../../assets/svg/Morning';
import Temperature from '../../assets/svg/Medium-temperature';
import {IRootReducer} from '../store/reducers';
import {SmallCard} from '../components/SmallCard';
import {styles} from './styles';

export const WeatherDay = () => {
  const {name, weatherCurrentDate, weatherMounth, isLoading} = useSelector(
    (state: IRootReducer) => state.weather,
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
              t = {weatherCurrentDate.temperature}
            </Text>
          )}
        </View>
      </View>
      <View style={styles.list}>
        {weatherMounth && (
          <FlatList
            data={weatherMounth.slice(0, 5)}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => `${item.day}` + `${item.date}`}
            renderItem={({item}) => <SmallCard item={item} />}
          />
        )}
      </View>
    </View>
  ) : (
    <ActivityIndicator size="large" color="#00ff00" />
  );
};
