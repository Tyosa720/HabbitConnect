import React, { useState } from 'react';
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

const ICONS = Object.keys(ICON_LIBRARIES).flatMap((library) => {
  const IconComponent = ICON_LIBRARIES[library as IconLibraryName];
  return Object.keys(IconComponent.glyphMap).map((iconName) => ({
    library: library as IconLibraryName,
    iconName,
    IconComponent,
  }));
});
export default ICONS;
