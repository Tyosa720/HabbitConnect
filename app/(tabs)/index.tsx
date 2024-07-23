import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Login" onPress={() => router.push('/auth/login')} />
      <Button title="Go to Signup" onPress={() => router.push('/auth/signup')} />
    </View>
  );
}
