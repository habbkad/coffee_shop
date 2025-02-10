import React from "react";
import { View, StyleSheet } from "react-native";
import HistoryComponent from "../components/HistoryComponent";
import { Box } from "native-base";

const History = ({ navigation }) => {
  return (
    <Box>
      <HistoryComponent navigation={navigation} />
    </Box>
  );
};

const styles = StyleSheet.create({});

export default History;
