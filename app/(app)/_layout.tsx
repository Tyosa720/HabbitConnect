import React, { useEffect } from 'react';
import { Slot } from 'expo-router';
import { useSession } from '@/src/context/AuthContext';
import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';

export default function ProtectedLayout() {
  const { session, isLoading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !session) {
      router.replace('/sign-in');
    }
  }, [session, isLoading, router]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!session) {
    return null;
  }

  return <Slot />;
}
