import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  card: {
    borderWidth: 1,
    flex: 2,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
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
