import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/reducers';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './src/navigation/rootNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
