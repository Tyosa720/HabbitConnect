import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '.';
import SettingsScreen from '.';
import { COLORS } from '@/src/constants/Colors';
import CreateHabitScreen from '../habit/create';
import { useRouter } from 'expo-router';

const Tab = createBottomTabNavigator();
export function EmptyComponent() {
  return null;
  }
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{...styles.shadow}}
    className="-top-7 justify-center items-center"
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: COLORS.gold
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  const router = useRouter();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: COLORS.background,
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={25}
                color={focused ? COLORS.gold : '#748c94'}
              />
              <Text style={{ color: focused ? COLORS.gold : '#748c94', fontSize: 12 }}>HOME</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Find"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                size={25}
                color={focused ? COLORS.gold : '#748c94'}
              />
              <Text style={{ color: focused ? COLORS.gold : '#748c94', fontSize: 12 }}>FIND</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Post"
        component={EmptyComponent} // Pas de composant associé
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="add"
              size={30}
              color="black"
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              onPress={() => router.navigate('/habit/create')} // Utilisez la navigation directe
            />
          )
        }}
      />
      <Tab.Screen
        name="Chat"
        component={CreateHabitScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Ionicons
                name={focused ? 'chatbubble' : 'chatbubble-outline'}
                size={25}
                color={focused ? COLORS.gold : '#748c94'}
              />
              <Text style={{ color: focused ? COLORS.gold : '#748c94', fontSize: 12 }}>CHAT</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Ionicons
                name={focused ? 'settings' : 'settings-outline'}
                size={25}
                color={focused ? COLORS.gold : '#748c94'}
              />
              <Text style={{ color: focused ? COLORS.gold : '#748c94', fontSize: 12 }}>SETTINGS</Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default function TabsLayout() {
  return (
   <Tabs />
  );
}

const styles = {
  shadow: {
    shadowColor: COLORS.shadowGold,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
};