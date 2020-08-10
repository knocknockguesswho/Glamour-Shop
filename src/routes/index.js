import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import 'react-native-gesture-handler';
<<<<<<< HEAD
import {
  Catalogue,
  MyProfileSettings,
  ShippingAddres,
  Signup,
  Splash,
} from '../screens'

=======
import {Catalogue, Splash, Signup, Home, Shop, Bag, Profile} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components/atoms';
>>>>>>> a9460ea069f1269b64720cf14d9945ef71b576c3

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

<<<<<<< HEAD
const App = () =>{
  return(
    <Stack.Navigator initialRouteName="ShippingAddress">
      <Stack.Screen 
        name="Catalogue"
        component={Catalogue}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="MyProfileSettings"
        component={MyProfileSettings}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="ShippingAddress"
        component={ShippingAddres}
        options={{headerShown: false}}
      />
      <Stack.Screen 
=======
const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Bag" component={Bag} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
>>>>>>> a9460ea069f1269b64720cf14d9945ef71b576c3
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
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default App;
