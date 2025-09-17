import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CircularProgress from 'react-native-circular-progress-indicator';
import ItemList from '@/src/components/ItemList';
import { COLORS } from '@/src/constants/Colors';
import Habit from '@/src/types/Habit';
interface ItemProps extends Habit {
  onPress: () => void;
  onDelete: () => void;
  onEdit: () => void;
}
export default function HomeScreen() {
  const router = useRouter();
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@ItemProps_data');
        if (jsonValue != null) {
          const data: ItemProps[] = JSON.parse(jsonValue);
          setItems(data);
        }
      } catch (e) {
        console.error('Failed to load the data from storage', e);
      }
    };

    loadData();
  }, []);

  const deleteItemProps = async (id: string) => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
    await AsyncStorage.setItem('@ItemProps_data', JSON.stringify(filteredItems));
  };

  const confirmDeleteItemProps = (id: string) => {
    Alert.alert(
      "Delete ItemProps",
      "Are you sure you want to delete this ItemProps?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteItemProps(id)
        }
      ],
      { cancelable: true }
    );
  };

  const handlePressItem = (id: string) => {
    router.push(`/item/${id}`);
  };

  const handleEditItem = (id: string) => {
    router.push(`/edit-ItemProps/${id}`);
  };

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="items-center p-4">
        <CircularProgress
          value={items.filter((item) => item.completion === 100).length}
          maxValue={items.length}
          valueSuffix={`/${items.length.toString()}`}
          activeStrokeColor={COLORS.gold as string}
        />
        <ItemList
          items={items}
          onPressItem={handlePressItem}
          onDeleteItem={confirmDeleteItemProps}
          onEditItem={handleEditItem}
        />
      </View>
    </ScrollView>
  );
}
