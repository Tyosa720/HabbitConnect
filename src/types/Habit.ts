import { IconLibraryName } from '@/src/types/Icon';

export type Habit = {
  id: string;
  title: string;
  description: string;
  frequency: string;
  completion: number;
  objectiveValue: string;
  objectiveUnit: string;
  category: string;
  notes: string;
  icon: { library: IconLibraryName; iconName: string };
};

export default Habit;
