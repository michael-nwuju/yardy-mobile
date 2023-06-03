import React from "react";
import { PickerItemProps } from "./PickerItem";
import { StyleSheet, View } from "react-native";
import Icon from "./Icon";
import Text from "./Text";

export interface CategoryPickerItemProps extends PickerItemProps {}

const CategoryPickerItem: React.FC<CategoryPickerItemProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Icon {...item.icon} size={80} name={item.icon?.name || "loading"} />
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
