import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {
  AddShippingAddress,
  ChangeAddress,
  MyOrders,
  Splash,
  Signup,
  ShippingAddres,
  Success,
  Home,
  Shop,
  Bag,
  Profile,
  Login,
  MyProfileSettings,
  MyBagCheckout,
  Search,
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
      <Tab.Screen name="Profile" component={TabProfile} />
    </Tab.Navigator>
  );
};

const TabProfile = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyOrders"
        component={MyOrders}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShippingAddress"
        component={ShippingAddres}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
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
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyProfileSettings"
        component={MyProfileSettings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyBagCheckout"
        component={MyBagCheckout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
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
