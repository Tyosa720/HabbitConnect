import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import ProgressCircle from '@/src/components/ProgressCircle';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View>
      <ProgressCircle completed={5} total={7} />
    </View>
  );
}
