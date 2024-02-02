import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from "./BottomTabs";
import HomeScreen from "../components/HomeScreen";
import Details from "../screens/Details";
// const MyTheme = {
//   dark: true,
//   colors: {
//     primary: "rgb(255, 45, 85)",
//     background: "black",
//     card: "rgb(255, 255, 255)",
//     text: "white",
//     border: "rgb(199, 199, 204)",
//     notification: "rgb(255, 69, 58)",
//   },
// };
const Stack = createNativeStackNavigator();

function Router() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme !== "dark" ? DarkTheme : DarkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={MyTabs} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
