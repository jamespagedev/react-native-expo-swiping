import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ScreenColor({ route }: any): JSX.Element {
  const { color } = route.params;
  return (
    <View style={{ ...styles.container, backgroundColor: color.background }}>
      <Text style={{ color: color.text }}>{color.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
