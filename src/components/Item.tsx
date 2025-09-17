import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { IconRenderer } from '@/src/components/icons/IconRenderer';
import { COLORS } from '@/src/constants/Colors';
import Habit from '../types/Habit';

interface ItemProps extends Habit {
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
      <IconRenderer library={icon.library} iconName={icon.iconName} size={24} color={COLORS.text as string} />
      <Text className="text-xl font-bold text-text">{title}</Text>
      <Text className="text-xl font-bold text-text">{frequency}</Text>
      <CircularProgress
        activeStrokeColor={COLORS.gold as string}
        radius={35}
        value={completion}
        valueSuffix="%"
      />
    </TouchableOpacity>
  );
};

export default Item;
