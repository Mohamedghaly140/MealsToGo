import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RestaurantScreen from './src/features/restaurants/screens/Restaurant';

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <StatusBar style='auto' />
    </>
  );
}
