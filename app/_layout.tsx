import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { ThemeProvider } from '@/src/context/ThemeContext';
import { SessionProvider } from '@/src/context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import { ActivityIndicator, Button, View, Text } from 'react-native';
import "@/global.css";


export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
 const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Montserrat-Regular': require('@/src/assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('@/src/assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Italic': require('@/src/assets/fonts/Montserrat-Italic.ttf'),
        'Montserrat-BoldItalic': require('@/src/assets/fonts/Montserrat-BoldItalic.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
        <ActivityIndicator size="large" />
    );
  }

  return (
      <SessionProvider>
        <SafeAreaView className="bg-background flex-1 font-montserrat font-bold">
          <Slot />
        </SafeAreaView>
      </SessionProvider>
  );
}
