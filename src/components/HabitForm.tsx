import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import IconPickerModal from '@/src/components/icons/IconPickerModal'; // Assurez-vous que le chemin est correct
import RNPickerSelect from 'react-native-picker-select';
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
  description: string;
  frequency: string;
  reminders: string;
  objectiveValue: string;
  objectiveUnit: string;
  category: string;
  notes: string;
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
    <ScrollView
      contentContainerStyle={{ paddingBottom: 60 }}
      className="flex-1 bg-background p-6"
    >
      <Text className="text-2xl font-semibold mb-4 text-text">
        Créer une habitude
      </Text>
      <Text className="text-lg mb-2 text-text">Nom de l'habitude</Text>
      <Controller
        control={control}
        name="title"
        rules={{
          required: 'Title is required',
          maxLength: {
            value: 50,
            message: 'Title cannot exceed 50 characters',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="h-12 border border-gold rounded-lg px-4 mb-3 text-text bg-background"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            maxLength={50}
            placeholder="Ex: Faire de l'exercice"
            placeholderTextColor="#7c7c7c"
          />
        )}
      />
      {errors.title && (
        <Text className="text-error mb-2">{errors.title.message}</Text>
      )}

      <Text className="text-lg mb-2 text-text">Description</Text>
      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="h-12 border border-gold rounded-lg px-4 mb-3 text-text bg-background"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Ex: Boire 2 litres d'eau par jour"
            placeholderTextColor="#7c7c7c"
          />
        )}
      />

      <Text className="text-lg mb-2 text-text">Fréquence</Text>
      <Controller
        control={control}
        name="frequency"
        rules={{ required: 'Frequency is required' }}
        render={({ field: { onChange, value } }) => (
          <View className="border border-gold rounded-lg mb-3 bg-background">
            <RNPickerSelect
              onValueChange={onChange}
              items={[
                { label: 'Quotidienne', value: 'daily' },
                { label: 'Hebdomadaire', value: 'weekly' },
                { label: 'Mensuelle', value: 'monthly' },
                { label: 'Annuelle', value: 'yearly' },
              ]}
              value={value}
              style={{
                inputIOS: {
                  color: 'white',
                  padding: 12,
                },
                inputAndroid: {
                  color: 'white',
                },
              }}
              placeholder={{
                label: 'Sélectionnez la fréquence',
                value: null,
                color: '#7c7c7c',
              }}
            />
          </View>
        )}
      />
      {errors.frequency && (
        <Text className="text-error mb-2">{errors.frequency.message}</Text>
      )}

      <Text className="text-lg mb-2 text-text">Objectif</Text>
      <View className="flex flex-row items-center mb-3">
        <Controller
          control={control}
          name="objectiveValue"
          rules={{
            required: 'Objective value is required',
            pattern: {
              value: /^[0-9]*$/,
              message: 'Objective value must be a number',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="h-12 border border-gold rounded-lg px-4 text-text bg-background flex-1 mr-2"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
              placeholder="Ex: 30"
              placeholderTextColor="#7c7c7c"
            />
          )}
        />
        <Controller
          control={control}
          name="objectiveUnit"
          rules={{ required: 'Objective unit is required' }}
          render={({ field: { onChange, value } }) => (
            <View className="border border-gold rounded-lg flex-1 bg-background">
              <RNPickerSelect
                onValueChange={onChange}
                items={[
                  { label: 'Litres', value: 'litres' },
                  { label: 'Minutes', value: 'minutes' },
                  { label: 'Pages', value: 'pages' },
                ]}
                value={value}
                style={{
                  inputIOS: {
                    color: 'white',
                    padding: 12,
                  },
                  inputAndroid: {
                    color: 'white',
                  },
                }}
                placeholder={{
                  label: 'Unité',
                  value: null,
                  color: '#7c7c7c',
                }}
              />
            </View>
          )}
        />
      </View>
      {errors.objectiveValue && (
        <Text className="text-error mb-2">{errors.objectiveValue.message}</Text>
      )}
      {errors.objectiveUnit && (
        <Text className="text-error mb-2">{errors.objectiveUnit.message}</Text>
      )}

      <Text className="text-lg mb-2 text-text">Catégorie</Text>
      <Controller
        control={control}
        name="category"
        rules={{ required: 'Category is required' }}
        render={({ field: { onChange, value } }) => (
          <View className="border border-gold rounded-lg mb-3 bg-background">
            <RNPickerSelect
              onValueChange={onChange}
              items={[
                { label: 'Santé', value: 'health' },
                { label: 'Bien-être', value: 'wellbeing' },
                { label: 'Productivité', value: 'productivity' },
                { label: 'Apprentissage', value: 'learning' },
                { label: 'Loisirs', value: 'leisure' },
              ]}
              value={value}
              style={{
                inputIOS: {
                  color: 'white',
                  padding: 12,
                },
                inputAndroid: {
                  color: 'white',
                },
              }}
              placeholder={{
                label: 'Sélectionnez une catégorie',
                value: null,
                color: '#7c7c7c',
              }}
            />
          </View>
        )}
      />
      {errors.category && (
        <Text className="text-error mb-2">{errors.category.message}</Text>
      )}

      <Text className="text-lg mb-2 text-text">Notes</Text>
      <Controller
        control={control}
        name="notes"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="h-12 border border-gold rounded-lg px-4 mb-3 text-text bg-background"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline={true}
            placeholder="Notes supplémentaires"
            placeholderTextColor="#7c7c7c"
          />
        )}
      />

      <Text className="text-lg mb-2 text-text">Icon</Text>
      <TouchableOpacity onPress={toggleModal}>
        <View className="h-12 border border-gold rounded-lg px-4 mb-3 flex flex-row items-center bg-background">
          {IconComponent && (
            <>
              <IconComponent
                name={icon.iconName as any}
                size={24}
                color="white"
              />
              <Text className="ml-2 text-text">{icon.iconName}</Text>
            </>
          )}
        </View>
      </TouchableOpacity>

      <IconPickerModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        onSelect={(selectedIcon) => setIcon(selectedIcon)}
      />

      <TouchableOpacity
        onPress={handleSubmit((data) => onSubmit({ ...data, icon }))}
        className="bg-gold rounded-full px-6 py-3 mt-4"
      >
        <Text className="text-lg text-black text-center bg-gold rounded-full p-2">
          Create habit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HabitForm;
