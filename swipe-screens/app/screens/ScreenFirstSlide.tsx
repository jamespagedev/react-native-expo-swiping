import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { frontendNavigations } from "@app/utils";

export default function ScreenFirstSlide({ route }: any): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { color } = route.params;
  return (
    <View style={{ ...styles.container, backgroundColor: color.background }}>
      <Text style={{ color: color.text }}>{color.title}</Text>
      <Pressable
        style={{
          width: "100%",
          // marginHorizontal: 40,
          paddingVertical: 10,
          backgroundColor: "#cdcdcd",
          borderRadius: 2,
        }}
        onPress={() =>
          navigation.navigate(frontendNavigations.secondSlide.route as never)
        }
      >
        <Text style={{ textAlign: "center", color: "dodgerblue" }}>
          Go To Next Slide Screen
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
