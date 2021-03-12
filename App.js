import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/infrastructure/theme';
import { ThemeProvider } from 'styled-components/native';

// Screens
import RestaurantScreen from './src/features/restaurants/screens/Restaurant';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <StatusBar style='auto' />
    </>
  );
}
