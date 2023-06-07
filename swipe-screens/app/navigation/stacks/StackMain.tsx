import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenColor, ScreenHome, ScreenNoSlide } from "@app/screens";
import { frontendNavigations } from "@app/utils";

const Stack = createStackNavigator();

export default function StackMain() {
  const rightToLeftAnimation = {
    cardStyleInterpolator: ({ current, layouts }: any) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };
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
        gestureResponseDistance: 20,
        gestureEnabled: true,
        gestureDirection: "horizontal",
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
        options={{
          title: frontendNavigations.color.screenTitle,
          ...rightToLeftAnimation,
        }}
      />
      <Stack.Screen
        name={frontendNavigations.noSlide.route as never}
        component={ScreenNoSlide}
        options={{ title: frontendNavigations.noSlide.screenTitle }}
      />
    </Stack.Navigator>
  );
}
