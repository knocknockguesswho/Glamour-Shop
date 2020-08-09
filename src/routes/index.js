import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import 'react-native-gesture-handler';
import {
  Catalogue,
  Splash,
  Signup
} from '../screens'


const Stack = createStackNavigator();

const App = () =>{
  return(
    <Stack.Navigator initialRouteName="Catalogue">
      <Stack.Screen 
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Catalogue"
        component={Catalogue}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

export default App;