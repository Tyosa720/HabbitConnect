import React from 'react';
import { View, Text, Button, _View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ItemList from '@/src/components/ItemList';
import CircularProgress from 'react-native-circular-progress-indicator';
import ItemProps from '@/src/types/item';
import { colors } from '@/src/constants/Colors';

export default function HomeScreen() {
  const router = useRouter();
  const items: ItemProps[] = [
    {
      title: 'Title',
      completion: 60,
      icon: 'aircraft',
      frequency: 'Daily',
      onPress: () => router.push('/item/1'),
    },
    {
      title: 'Title',
      completion: 60,
      icon: 'aircraft',
      frequency: 'Daily',
      onPress: () => router.push('/item/2'),
    },
    {
      title: 'Title',
      completion: 100,
      icon: 'aircraft',
      frequency: 'Daily',
      onPress: () => router.push('/item/3'),
    },
  ];
  return (
    <View className="flex-1 bg-background items-center p-4">
      <CircularProgress
        value={items.filter((item) => item.completion === 100).length}
        maxValue={items.length}
        valueSuffix={`/${items.length.toString()}`}
        activeStrokeColor={colors.gold as string}
      />
      <ItemList items={items} />
      <TouchableOpacity
        onPress={() => router.push('/habit/create')}
        className="bg-gold rounded-full px-6 py-3 mt-4"
      />
    </View>
  );
}
