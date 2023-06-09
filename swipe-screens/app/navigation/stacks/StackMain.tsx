import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ScreenFirstNoSlide,
  ScreenFirstSlide,
  ScreenHome,
  ScreenSecondNoSlide,
  ScreenSecondSlide,
} from "@app/screens";
import { frontendNavigations } from "@app/utils";

const MainStack = createStackNavigator();

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

const screenSliderRoutes = new Set([
  frontendNavigations.firstSlide.route,
  frontendNavigations.secondSlide.route,
]);

export default function StackMain() {
  return (
    <MainStack.Navigator
      initialRouteName={frontendNavigations.home.route as never}
      screenOptions={({ route }) => {
        return {
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#434343" },
          headerRightContainerStyle: { paddingRight: 10 },
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerTitleStyle: { color: "#ffffff" },
          headerTintColor: "#ffffff",
          gestureResponseDistance: 20,
          gestureEnabled: screenSliderRoutes.has(route.name) ? true : false,
          gestureDirection: "horizontal",
        };
      }}
    >
      <MainStack.Screen
        name={frontendNavigations.home.route as never}
        component={ScreenHome}
        options={{ title: frontendNavigations.home.screenTitle }}
      />
      <MainStack.Screen
        name={frontendNavigations.firstNoSlide.route as never}
        component={ScreenFirstNoSlide}
        options={{ title: frontendNavigations.firstNoSlide.screenTitle }}
      />
      <MainStack.Screen
        name={frontendNavigations.secondNoSlide.route as never}
        component={ScreenSecondNoSlide}
        options={{ title: frontendNavigations.secondNoSlide.screenTitle }}
      />
      <MainStack.Screen
        name={frontendNavigations.firstSlide.route as never}
        component={ScreenFirstSlide}
        options={{
          title: frontendNavigations.firstSlide.screenTitle,
          ...rightToLeftAnimation,
        }}
      />
      <MainStack.Screen
        name={frontendNavigations.secondSlide.route as never}
        component={ScreenSecondSlide}
        options={{
          title: frontendNavigations.secondSlide.screenTitle,
          ...rightToLeftAnimation,
        }}
      />
    </MainStack.Navigator>
  );
}
