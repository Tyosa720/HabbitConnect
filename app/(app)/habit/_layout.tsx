import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter, useSegments } from 'expo-router';
import { Slot } from 'expo-router';

const HabitLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const segments = useSegments();
  const currentPage = segments[segments.length - 1];

  const pageTitles: { [key: string]: string } = {
    create: 'Créer une habitude',
    edit: 'Modifier une habitude',
    // Ajoutez plus de correspondances de pages ici
  };

  return (
    <View className="flex-1 bg-background p-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-semibold text-text flex-1 text-center">
          {pageTitles[currentPage] || 'Page'}
        </Text>
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <MaterialIcons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Slot />
    </View>
  );
};

export default HabitLayout;
