import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ScreenSecondNoSlide(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Second No Slide Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
