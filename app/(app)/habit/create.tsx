import React from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import HabitForm from '@/src/components/HabitForm'; // Assurez-vous que le chemin est correct

const CreateHabitScreen = () => {
  const router = useRouter();

  const handleCreateHabit = (data: any) => {
    // Logique pour créer l'habitude
    console.log('Habit created:', data);
    // Rediriger ou mettre à jour l'état global
    router.back();
  };

  return (
    <View className="flex-1 justify-center bg-background">
      <HabitForm
        handleFormSubmit={handleCreateHabit}
        defaultValues={{
          title: '',
          description: '',
          frequency: 'daily',
          reminders: '',
          objectiveValue: '',
          objectiveUnit: '',
          category: '',
          notes: '',
          icon: { library: 'MaterialCommunityIcons', iconName: 'star' },
        }}
      />
    </View>
  );
};

export default CreateHabitScreen;
