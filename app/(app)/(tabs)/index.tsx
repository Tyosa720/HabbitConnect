import React from 'react';
import { View, Text, Button, _View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ItemList from '@/src/components/ItemList';
import CircularProgress from 'react-native-circular-progress-indicator';
import ItemProps from '@/src/types/item';
import { COLORS } from '@/src/constants/Colors';
import { ScrollView } from 'react-native';

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
    <ScrollView className='flex-1 bg-background'>
      <View className="items-center p-4">
            <CircularProgress
              value={items.filter((item) => item.completion === 100).length}
              maxValue={items.length}
              valueSuffix={`/${items.length.toString()}`}
              activeStrokeColor={COLORS.gold as string}
            />
            <ItemList items={items} />
      </View>
    </ScrollView>
  );
}
