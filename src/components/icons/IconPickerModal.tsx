import React, { useState } from 'react';
import { colors } from '@/src/constants/Colors';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
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

interface IconItem {
  library: IconLibraryName;
  iconName: string;
  IconComponent:
    | typeof FontAwesome
    | typeof Ionicons
    | typeof MaterialCommunityIcons;
}

const ICONS: IconItem[] = Object.keys(ICON_LIBRARIES).flatMap((library) => {
  const IconComponent = ICON_LIBRARIES[library as IconLibraryName];
  return Object.keys(IconComponent.glyphMap).map((iconName) => ({
    library: library as IconLibraryName,
    iconName,
    IconComponent,
  }));
});

interface IconPickerModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSelect: (icon: { library: IconLibraryName; iconName: string }) => void;
}

const IconPickerModal: React.FC<IconPickerModalProps> = ({
  isVisible,
  onClose,
  onSelect,
}) => {
  const [search, setSearch] = useState<string>('');
  const filteredIcons = ICONS.filter(({ iconName }) =>
    iconName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      avoidKeyboard={true}
      backdropTransitionOutTiming={0}
      style={{
        justifyContent: 'center',
        margin: 0,
      }}
    >
      <View className="bg-background shadow-sm shadow-gold border-gold border p-4 rounded-lg h-2/3 w-4/5 self-center">
        <TextInput
          className="h-10 border border-gray-300 px-2 mb-3"
          placeholder="Search icons..."
          value={search}
          onChangeText={setSearch}
        />
        <FlatList
          data={filteredIcons}
          keyExtractor={(item) => `${item.library}-${item.iconName}`}
          numColumns={5}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                onSelect({ library: item.library, iconName: item.iconName });
                onClose();
              }}
            >
              <View className="p-2 m-1 border-gray-300 border rounded items-center">
                <item.IconComponent
                  name={item.iconName as any}
                  size={24}
                  color={colors.text as string}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
};

export default IconPickerModal;
