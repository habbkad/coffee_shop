import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, useColorScheme } from "react-native";
import Home from "./src/screens/Home";
import { useTheme } from "@react-navigation/native";

import {
  NativeBaseProvider,
  Text,
  Box,
  useColorModeValue,
  extendTheme,
} from "native-base";
import store from "./src/redux/store";
import Router from "./src/routes/Router";
import { Provider } from "react-redux";

export default function App() {
  const { colors } = useTheme();
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Box h={"100%"}>
          <Router />
        </Box>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
