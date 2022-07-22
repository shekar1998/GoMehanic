import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import color from '../color/color';
import HomeScreen from '../screen/home/HomeScreen';

const Stack = createNativeStackNavigator();
const bgcolor = color.light;

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen
        name='HomeScreen'
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
