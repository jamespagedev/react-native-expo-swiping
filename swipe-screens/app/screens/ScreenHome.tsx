import React from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { data } from "@app/data";
import { frontendNavigations } from "@app/utils";

const Item = ({ color, navigation }: any): JSX.Element => {
  return (
    <View
      style={{ ...styles.itemContainer, backgroundColor: color.background }}
    >
      <Text style={{ color: color.text, fontWeight: "700" }}>
        {color.title}
      </Text>
      <Pressable
        style={{ margin: 0, padding: 0, backgroundColor: "#ffffff" }}
        onPress={() =>
          navigation.navigate(frontendNavigations.firstSlide.route as never, {
            color,
          })
        }
      >
        <Icon
          style={{ alignSelf: "center", padding: 20 }}
          name="keyboard-arrow-right"
          size={40}
          color="#67B5BD"
        />
      </Pressable>
    </View>
  );
};

export default function ScreenHome(): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={{
          width: "100%",
          // marginHorizontal: 40,
          paddingVertical: 10,
          backgroundColor: "#cdcdcd",
          borderRadius: 2,
        }}
        onPress={() =>
          navigation.navigate(frontendNavigations.firstNoSlide.route as never)
        }
      >
        <Text style={{ textAlign: "center", color: "dodgerblue" }}>
          Go To No Slide Screen
        </Text>
      </Pressable>
      <Text style={{ ...styles.mainFont, marginTop: 20, marginBottom: 10 }}>
        Select a Color
      </Text>
      <FlatList
        contentContainerStyle={{ paddingBottom: 120 }}
        style={{ width: "100%" }}
        data={data}
        renderItem={({ item }) => <Item color={item} navigation={navigation} />}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000000",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: 1,
    paddingLeft: 20,
  },
  mainFont: {
    fontSize: 32,
    color: "#ffffff",
    textDecorationLine: "underline",
    fontWeight: "700",
  },
});
