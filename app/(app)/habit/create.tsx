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
    <View className="flex-1 justify-center p-4">
      <HabitForm
        onSubmit={handleCreateHabit}
        defaultValues={{
          title: '',
          frequency: '',
          icon: { library: 'FontAwesome', iconName: 'home' },
        }}
      />
    </View>
  );
};

export default CreateHabitScreen;
