import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {
  AddShippingAddress,
  Catalogue,
  ChangeAddress,
  Splash,
  Signup,
  ShippingAddres,
  Home,
  Shop,
  Bag,
  Profile,
} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components/atoms';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="AddShippingAddress"
        component={AddShippingAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangeAddress"
        component={ChangeAddress}
        options={{headerShown: false}}
      />
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
      <Stack.Screen
        name="ShippingAddress"
        component={ShippingAddres}
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
