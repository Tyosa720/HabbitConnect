import React from "react";
import { View, Text, Button, _View } from "react-native";
import { useRouter } from "expo-router";
import ItemList from "@/src/components/ItemList";
import CircularProgress from "react-native-circular-progress-indicator";
import ItemProps from "@/src/types/item";
export default function HomeScreen() {
  const router = useRouter();
  const items: ItemProps[] = [
    {
      title: "Title",
      completion: 60,
      icon: "aircraft",
      frequency: "Daily",
      onPress: () => router.push("/item/1"),
    },
    {
      title: "Title",
      completion: 60,
      icon: "aircraft",
      frequency: "Daily",
      onPress: () => router.push("/item/2"),
    },
    {
      title: "Title",
      completion: 60,
      icon: "aircraft",
      frequency: "Daily",
      onPress: () => router.push("/item/3"),
    },
  ];
  return (
    <View className="flex-1 bg-background">
      <CircularProgress
        value={60}
        radius={120}
        duration={2000}
        progressValueColor={"#ecf0f1"}
        maxValue={200}
        title={"KM/H"}
        titleColor={"white"}
        titleStyle={{ fontWeight: "bold" }}
      />
      <ItemList items={items} />
    </View>
  );
}
