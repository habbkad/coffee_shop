import React from "react";
import { View, StyleSheet } from "react-native";
import { Box, FlatList } from "native-base";
import HistoryItem from "./HistoryItem";

const HistoryComponent = ({ navigation }) => {
  const data = [1, 3, 4];
  return (
    <Box>
      <FlatList
        w={"100%"}
        data={data}
        renderItem={(item) => {
          return <HistoryItem navigation={navigation} />;
        }}
      />
    </Box>
  );
};

const styles = StyleSheet.create({});

export default HistoryComponent;
