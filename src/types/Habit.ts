import { Entypo } from '@expo/vector-icons';
interface Habit {
  title: string;
  frequency: string;
  completion: number;
  icon: keyof typeof Entypo.glyphMap;
}
export default Habit;
