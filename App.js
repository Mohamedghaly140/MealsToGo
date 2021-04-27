import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/infrastructure/theme';
import { ThemeProvider } from 'styled-components/native';
import * as firebase from 'firebase';

// Context Golbal State
import { AuthenticationContextProvider } from './src/services/authentication/context';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

// Navigation
import MainNavigation from './src/infrastructure/navigation';

const firebaseConfig = {
  apiKey: 'AIzaSyDWgYP0PoAxp1azrw-rp1bfXtj7bIi8zXk',
  authDomain: 'mealstogo-app.firebaseapp.com',
  projectId: 'mealstogo-app',
  storageBucket: 'mealstogo-app.appspot.com',
  messagingSenderId: '549357243069',
  appId: '1:549357243069:web:29f035b9b1a59a2fe285d4',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
        <AuthenticationContextProvider>
          <MainNavigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style='auto' />
    </>
  );
}
