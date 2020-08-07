import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Text,
} from 'react-native';


const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Text>APP</Text>
    </>
  );
};

export default App;
