import React from "react";
import { View, StyleSheet } from "react-native";
import { Box, Text, Icon, Image, FlatList } from "native-base";
import {
  Ionicons,
  Fontisto,
  Entypo,
  FontAwesome5,
  FontAwesome6,
} from "@expo/vector-icons";
import CoffeComponent from "./CoffeComponent";

const CoffeeCategories = () => {
  const data = [0, 1, 2, 3, 4];
  return (
    <Box mt={6}>
      <Box>
        <Text
          color={"lightText"}
          fontSize={"2xl"}
          fontWeight={"semibold"}
          ml={3}
        >
          Categories
        </Text>
        <Box
          mt={4}
          display={"flex"}
          flexDir={"row"}
          px={1}
          justifyContent={"space-between"}
        >
          <Box bgColor={"red.700"} borderRadius={"50%"} px={1}>
            <Text
              color={"lightText"}
              fontSize={"lg"}
              fontWeight={"semibold"}
              textAlign={"end"}
            >
              <Fontisto name="coffeescript" size={20} color="white" /> Cappacino
            </Text>
          </Box>

          <Text color={"lightText"} fontSize={"md"} fontWeight={"semibold"}>
            <FontAwesome6 name="mug-saucer" size={20} color="white" /> Cold Brew
          </Text>
          <Text color={"lightText"} fontSize={"md"} fontWeight={"semibold"}>
            <FontAwesome5 name="mug-hot" size={23} color="white" /> Expresso
          </Text>
        </Box>
      </Box>
      <FlatList
        w={"100%"}
        data={data}
        numColumns={2}
        renderItem={(item) => {
          return <CoffeComponent />;
        }}
      />
    </Box>
  );
};

const styles = StyleSheet.create({});

export default CoffeeCategories;
