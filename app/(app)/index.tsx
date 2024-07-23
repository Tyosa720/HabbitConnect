import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { auth } from '@/src/utils/firebaseConfig';

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    await auth.signOut();
    router.replace('/sign-in');
  };

  return (
    <View>
      <Text>Home Screen - Protected</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
