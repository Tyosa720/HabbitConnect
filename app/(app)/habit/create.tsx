import React from 'react';
import { View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HabitForm from '@/src/components/HabitForm';
import { Habit } from '@/src/types/Habit';
import { useRouter } from 'expo-router';

const CreateHabitScreen = () => {
  const router = useRouter();

  const handleFormSubmit = async (newHabit: Habit) => {
    try {
      const jsonValue = await AsyncStorage.getItem('@habit_data');
      const habits: Habit[] = jsonValue != null ? JSON.parse(jsonValue) : [];
      const updatedHabits = [
        ...habits,
        { ...newHabit, id: Date.now().toString(), completion: 0 },
      ];
      await AsyncStorage.setItem('@habit_data', JSON.stringify(updatedHabits));
      Alert.alert('Success', 'Habit created successfully', [
        { text: 'OK', onPress: () => router.push('/') },
      ]);
    } catch (e) {
      console.error('Failed to save the new habit to storage', e);
    }
  };

  const defaultValues: Habit = {
    id: '',
    title: '',
    description: '',
    frequency: '',
    completion: 0,
    objectiveValue: '',
    objectiveUnit: '',
    category: '',
    notes: '',
    icon: { library: 'FontAwesome', iconName: 'home' },
  };

  return (
    <View className="flex-1 bg-background p-6">
      <HabitForm
        handleFormSubmit={handleFormSubmit}
        defaultValues={defaultValues}
      />
    </View>
  );
};

export default CreateHabitScreen;
