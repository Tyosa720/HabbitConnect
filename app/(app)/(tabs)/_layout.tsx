import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Slot } from 'expo-router';

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="index" component={Slot} options={{headerShown:false}} />
      <Tab.Screen name="settings" component={Slot} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}
