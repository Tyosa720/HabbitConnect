import React from 'react';
import { View, Text } from 'react-native';

interface ProgressCircleProps {
  completed: number;
  total: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ completed, total }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (completed / total) * 100;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View className="items-center justify-center my-4">
      <View className="h-32 w-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
        <View className="h-28 w-28 rounded-full border-8 border-green-500 flex items-center justify-center">
          <Text className="text-xl font-bold">{completed}/{total}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProgressCircle;
