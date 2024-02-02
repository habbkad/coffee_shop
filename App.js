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
import Router from "./src/routes/Router";

export default function App() {
  const { colors } = useTheme();
  return (
    <NativeBaseProvider>
      <Box h={"100%"}>
        <Router />
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
