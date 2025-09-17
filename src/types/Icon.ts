import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const ICON_LIBRARIES = {
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
  };
  
export type IconLibraryName = keyof typeof ICON_LIBRARIES;