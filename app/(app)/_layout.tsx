import React, { useEffect } from 'react';
import { Slot } from 'expo-router';
import { useSession } from '@/src/context/AuthContext';
import { useRouter } from 'expo-router';
import { Text } from 'react-native';

export default function ProtectedLayout() {
  const { session, isLoading } = useSession();
  const router = useRouter();

  /*useEffect(() => {
    if (!isLoading && !session) {
      router.replace('/auth/sign-in');
    }
  }, [session, isLoading, router]);

  if (isLoading) {
    return (
        <Text>Loading...</Text>
    );
  }

  if (!session) {
    return null;
  }*/

  return <Slot />
}
