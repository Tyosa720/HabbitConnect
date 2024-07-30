import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Entypo } from '@expo/vector-icons';
import { COLORS } from '@/src/constants/Colors'; // Assurez-vous que le chemin est correct

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
      className="flex flex-row items-center justify-between p-4 w-full bg-grey my-2 rounded-lg border border-gold"
    >
      <Entypo name={icon} size={24} color={COLORS.text as string} />
      <Text className="text-xl font-bold text-text">{title}</Text>
      <Text className="text-xl font-bold text-text">{frequency}</Text>
      <CircularProgress
        activeStrokeColor={COLORS.gold as string}
        radius={35}
        value={completion}
        valueSuffix="%"
      ></CircularProgress>
    </TouchableOpacity>
  );
};

export default Item;
