import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HabitForm from '@/src/components/HabitForm';
import { Habit } from '@/src/types/Habit';
import { useRouter, useLocalSearchParams } from 'expo-router';

const EditHabitScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [habit, setHabit] = useState<Habit | null>(null);

  useEffect(() => {
    const loadHabit = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@habit_data');
        if (jsonValue != null) {
          const data: Habit[] = JSON.parse(jsonValue);
          const habitToEdit = data.find((h) => h.id === id);
          if (habitToEdit) {
            setHabit(habitToEdit);
          }
        }
      } catch (e) {
        console.error('Failed to load the habit from storage', e);
      }
    };

    if (id) {
      loadHabit();
    }
  }, [id]);

  const handleFormSubmit = async (updatedHabit: Habit) => {
    try {
      const jsonValue = await AsyncStorage.getItem('@habit_data');
      const habits: Habit[] = jsonValue != null ? JSON.parse(jsonValue) : [];
      const updatedHabits = habits.map((h) =>
        h.id === updatedHabit.id ? updatedHabit : h
      );
      await AsyncStorage.setItem('@habit_data', JSON.stringify(updatedHabits));
      Alert.alert('Success', 'Habit updated successfully', [
        { text: 'OK', onPress: () => router.back() },
      ]);
    } catch (e) {
      console.error('Failed to update the habit in storage', e);
    }
  };

  return (
    <View className="flex-1 bg-background p-6">
      {habit ? (
        <HabitForm handleFormSubmit={handleFormSubmit} defaultValues={habit} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default EditHabitScreen;
