import React from 'react';
import {Text, View} from 'react-native';
import {IBigCardProps} from '../services/types';
import {timeConverter} from '../utils/timeConverter';
import {styles} from './styles';

export const BigCard = (props: IBigCardProps) => {
  const {choozen} = props;
  return (
    <View style={styles.detailCard}>
      {choozen?.date && (
        <Text style={styles.text}>date: {timeConverter(choozen.date)}</Text>
      )}
      <Text style={styles.text}>{choozen?.text}</Text>
      <Text style={styles.text}>t low = {choozen?.low}</Text>
      <Text style={styles.text}>t high = {choozen?.high}</Text>
    </View>
  );
};
