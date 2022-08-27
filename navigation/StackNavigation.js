import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import color from '../color/color';
import HomeScreen from '../src/components/screens/home/HomeScreen';
import ServiceScreen from '../src/components/screens/ServiceScreen';

const Stack = createNativeStackNavigator();
const bgcolor = color.light;

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
       <Stack.Screen
        name="ServiceScreen"
        options={{
          headerShown: false,
        }}
        component={ServiceScreen}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
