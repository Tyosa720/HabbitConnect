import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Item from './Item';
import { Habit } from '@/src/types/Habit';


interface ItemProps extends Habit {
  onPress: () => void;
  onDelete: () => void;
  onEdit: () => void;
}
interface ItemListProps {
  items: ItemProps[];
  onPressItem: (id: string) => void;
  onDeleteItem: (id: string) => void;
  onEditItem: (id: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onPressItem, onDeleteItem, onEditItem }) => {
  const renderItem = ({ item }: { item: ItemProps }) => (
    <Item {...item} onPress={() => onPressItem(item.id)} />
  );

  const renderHiddenItem = ({ item }: { item: ItemProps }) => (
    <View className="absolute inset-0 flex-row justify-between bg-grey">
      <TouchableOpacity onPress={() => onEditItem(item.id)} className="w-[75px] bg-blue-600 justify-center items-center">
        <Text className="text-white">Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDeleteItem(item.id)} className="w-[75px] bg-red-600 justify-center items-center">
        <Text className="text-white">Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SwipeListView
      data={items}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-150}
      disableRightSwipe
      keyExtractor={(item) => item.id}
      className="bg-background"
    />
  );
};

export default ItemList;
