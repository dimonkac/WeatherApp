import React from 'react';
import {Text, View} from 'react-native';
import {ISmallCard} from '../services/types';
import {timeConverter} from '../utils/timeConverter';
import {styles} from './styles';

export const SmallCard = (props: ISmallCard) => {
  const {item} = props;
  return (
    <View style={styles.smallCard}>
      <Text>{timeConverter(item.date)}</Text>
      <Text>{item.text}</Text>
      <Text>t low = {item.low}</Text>
      <Text>t high = {item.high}</Text>
    </View>
  );
};
