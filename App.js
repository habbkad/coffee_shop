import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, useColorScheme } from "react-native";
import Home from "./src/screens/Home";
import {
  NativeBaseProvider,
  Text,
  Box,
  useColorModeValue,
  extendTheme,
} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box bg={"black"} h={"100%"}>
        <Home />
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
