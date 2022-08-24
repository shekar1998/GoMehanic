import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/components/screens/home/HomeScreen';
import StackNavigation from './StackNavigation';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import React from 'react';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

        
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#51cbe9',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingVertical: 5,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          position: 'absolute',
          height: 70,
          shadowOffset: {width: -4, height: 4},
          shadowColor: 'blue',
          shadowOpacity: 0.2,
          shadowRadius: 1,
          elevation: 9,
          backgroundColor: '#edf3f5',
        },
        tabBarLabelStyle: {paddingBottom: 3},
      })}>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={StackNavigation}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Settings"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Settings12"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}
