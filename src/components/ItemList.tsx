import React from "react";
import { FlatList } from "react-native";
import Item from "./Item";
import ItemProps from "@/src/types/item";

interface ItemListProps {
  items: ItemProps[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const renderItem = ({ item }: { item: ItemProps }) => <Item {...item} />;

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      className="p-4 bg-background"
    />
  );
};

export default ItemList;
