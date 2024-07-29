import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import IconPickerModal from '@/src/components/icons/IconPickerModal'; // Assurez-vous que le chemin est correct
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const ICON_LIBRARIES = {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
};

type IconLibraryName = keyof typeof ICON_LIBRARIES;

interface HabitFormValues {
  title: string;
  frequency: string;
  icon: { library: IconLibraryName; iconName: string };
}

interface HabitFormProps {
  onSubmit: (data: HabitFormValues) => void;
  defaultValues: HabitFormValues;
}

const HabitForm: React.FC<HabitFormProps> = ({ onSubmit, defaultValues }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<HabitFormValues>({
    defaultValues,
  });
  const [icon, setIcon] = useState<{
    library: IconLibraryName;
    iconName: string;
  }>(defaultValues.icon || { library: 'FontAwesome', iconName: 'home' });
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const IconComponent = ICON_LIBRARIES[icon.library];

  return (
    <View className="p-4 flex-1">
      <Text className="text-lg mb-2 text-white">Title</Text>
      <Controller
        control={control}
        name="title"
        rules={{ required: 'Title is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="h-10 border border-gray-300 px-2 mb-3 text-white"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.title && (
        <Text className="text-red-500 mb-2">{errors.title.message}</Text>
      )}

      <Text className="text-lg mb-2 text-white">Frequency</Text>
      <Controller
        control={control}
        name="frequency"
        rules={{ required: 'Frequency is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="h-10 border border-gray-300 px-2 mb-3 text-white"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.frequency && (
        <Text className="text-red-500 mb-2">{errors.frequency.message}</Text>
      )}

      <Text className="text-lg mb-2 text-white">Icon</Text>
      <TouchableOpacity onPress={toggleModal}>
        <View className="h-10 border border-gray-300 px-2 mb-3 flex flex-row items-center">
          {IconComponent && (
            <>
              <IconComponent
                name={icon.iconName as any}
                size={24}
                color="white"
              />
              <Text className="ml-2 text-white">{icon.iconName}</Text>
            </>
          )}
        </View>
      </TouchableOpacity>

      <IconPickerModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        onSelect={(selectedIcon) => setIcon(selectedIcon)}
      />

      <Button
        title="Submit"
        onPress={handleSubmit((data) => onSubmit({ ...data, icon }))}
      />
    </View>
  );
};

export default HabitForm;
