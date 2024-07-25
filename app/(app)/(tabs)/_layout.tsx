import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Slot } from 'expo-router';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}
    >
      <Tab.Screen
        name="index"
        component={Slot}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="settings"
        component={Slot}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
