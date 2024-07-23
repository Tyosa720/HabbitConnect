import React, { useState, useEffect } from 'react';
import { ThemeProvider, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import { SessionProvider } from '@/src/context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import { ActivityIndicator, Button, View, Text } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";


export default function RootLayout() {
  const [colorScheme, setColorScheme] = useState(useColorScheme());
  const [fontsLoaded, setFontsLoaded] = useState(false);

  NativeWindStyleSheet.setOutput({
    default: "native",
  });

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
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SessionProvider>
        <SafeAreaView className="flex-1 font-montserrat font-bold">
          <Slot />
          <Button title="Toggle System UI" onPress={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}  />
        </SafeAreaView>
      </SessionProvider>
      <Text>Test</Text>
    </ThemeProvider>
  );
}
