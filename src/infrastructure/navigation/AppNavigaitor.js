import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text, Platform } from 'react-native';

import RestaurantScreen from '../../features/restaurants/screens/Restaurant';
import SafeArea from '../../components/SafeArea';

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
      <Tab.Screen name='Restaurants' component={RestaurantScreen} />
      <Tab.Screen name='Map' component={Map} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
