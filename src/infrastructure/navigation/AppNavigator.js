import React from 'react';
import { Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SafeArea from '../../components/SafeArea';

import RestaurantsNavigator from './RestaurantsNavigator';

const Tab = createBottomTabNavigator();

const isAndroid = Platform.OS === 'android';

const TAB_ICON = {
  Restaurants: isAndroid ? 'md-restaurant' : 'ios-restaurant',
  Settings: isAndroid ? 'md-settings' : 'ios-settings',
  Map: isAndroid ? 'md-map' : 'ios-map',
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
      <Tab.Screen name='Map' component={Map} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
