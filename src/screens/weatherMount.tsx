import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {SmallCard} from '../components/SmallCard';
import {IRootReducer} from '../store/reducers';
import {styles} from './styles';

export const WeatherMounth = () => {
  const {name, weatherMounth} = useSelector(
    (state: IRootReducer) => state.weather,
  );
  return (
    <View style={styles.main}>
      <Text>Monthly weather in {name}</Text>
      <View style={styles.list}>
        {weatherMounth && (
          <FlatList
            data={weatherMounth}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => `${item.date}` + `${item.day}`}
            renderItem={({item}) => <SmallCard item={item} />}
          />
        )}
      </View>
    </View>
  );
};
