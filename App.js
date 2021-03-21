import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/infrastructure/theme';
import { ThemeProvider } from 'styled-components/native';

// Context Golbal State
import { RestaurantsContextProvider } from './src/services/restaurants/context';
import { LocationContextProvider } from './src/services/location/context';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

// Navigation
import MainNavigation from './src/infrastructure/navigation';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <MainNavigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <StatusBar style='auto' />
    </>
  );
}
