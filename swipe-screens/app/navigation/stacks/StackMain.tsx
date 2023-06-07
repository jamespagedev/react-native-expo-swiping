import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenColor, ScreenHome } from "@app/screens";
import { frontendNavigations } from "@app/utils";

const Stack = createStackNavigator();

export default function StackMain() {
  return (
    <Stack.Navigator
      initialRouteName={frontendNavigations.home.route as never}
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#434343" },
        headerRightContainerStyle: { paddingRight: 10 },
        headerLeftContainerStyle: { paddingLeft: 10 },
        headerTitleStyle: { color: "#ffffff" },
        headerTintColor: "#ffffff",
      }}
    >
      <Stack.Screen
        name={frontendNavigations.home.route as never}
        component={ScreenHome}
        options={{ title: frontendNavigations.home.screenTitle }}
      />
      <Stack.Screen
        name={frontendNavigations.color.route as never}
        component={ScreenColor}
        options={{ title: frontendNavigations.color.screenTitle }}
      />
    </Stack.Navigator>
  );
}
