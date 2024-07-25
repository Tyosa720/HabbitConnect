import { Entypo } from "@expo/vector-icons";

interface ItemProps {
  title: string;
  completion: number;
  icon: keyof typeof Entypo.glyphMap;
  frequency: string;
  onPress: () => void;
}
export default ItemProps;
