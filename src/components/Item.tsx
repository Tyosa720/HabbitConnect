import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Entypo } from '@expo/vector-icons';

interface ItemProps {
  title: string;
  completion: number;
  icon: keyof typeof Entypo.glyphMap;
  frequency: string;
  onPress: () => void;
}

const Item: React.FC<ItemProps> = ({
  title,
  completion,
  icon,
  frequency,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="flex flex-row justify-between p-4 bg-grey my-2 rounded-lg border border-gold"
    >
      <Entypo name={icon} size={24} color="black" />
      <Text className="text-xl font-bold text-text">{title}</Text>
      <Text className="text-xl font-bold text-text">{frequency}</Text>
      <CircularProgress value={completion}></CircularProgress>
    </TouchableOpacity>
  );
};

export default Item;
