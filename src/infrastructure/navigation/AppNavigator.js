import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RestaurantsNavigator from './RestaurantsNavigator';
import SettingsNavigator from './SettingNavigator';
import MapScreen from '../../features/map/screens/Map';

import { RestaurantsContextProvider } from '../../services/restaurants/context';
import { LocationContextProvider } from '../../services/location/context';
import { FavouritesContextProvider } from '../../services/favourites/context';

const Tab = createBottomTabNavigator();

const isAndroid = Platform.OS === 'android';

const TAB_ICON = {
  Restaurants: isAndroid ? 'md-restaurant' : 'ios-restaurant',
  Settings: isAndroid ? 'md-settings' : 'ios-settings',
  Map: isAndroid ? 'md-map' : 'ios-map',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
          <Tab.Screen name='Map' component={MapScreen} />
          <Tab.Screen name='Settings' component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);

export default AppNavigator;
