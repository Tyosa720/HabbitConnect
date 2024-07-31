interface ItemProps {
  title: string;
  completion: number;
  icon: { library: string; iconName: string };
  frequency: string;
  onPress: () => void;
}
export default ItemProps;
