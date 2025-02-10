import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, Box, Avatar, Input, Icon } from "native-base";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import CoffeeCategories from "./CoffeeCategories";

const HomeScreen = ({ navigation }) => {
  return (
    <Box px={0}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        pl={2}
        alignItems={"center"}
      >
        <Avatar
          bg="indigo.500"
          alignSelf="left"
          size="lg"
          source={{
            uri: "https://i.pinimg.com/564x/ad/d2/bb/add2bbc8671e8158d0442b99c8153276.jpg",
          }}
        >
          RS
        </Avatar>
        <Box flexDir={"row"}>
          <Ionicons name="location" size={24} color="red" />
          <Text
            color={"lightText"}
            fontSize={"md"}
            ml={1}
            fontWeight={"semibold"}
          >
            East Legon, Accra
          </Text>
        </Box>

        <Ionicons name="notifications-outline" size={30} color="white" />
      </Box>
      <Box mt={4} display={"flex"} flexDir={"row"} ml={4}>
        <Text color={"lightText"} fontSize={"2xl"} fontWeight={"semibold"}>
          Good morning,
        </Text>
        <Text
          color={"lightText"}
          fontSize={"2xl"}
          fontWeight={"normal"}
          fontStyle={"italic"}
        >
          Coffe lovers
        </Text>
      </Box>
      <Box mt={6}>
        <Input
          size={"xl"}
          placeholder="Search Coffee..."
          borderColor={"gray.200"}
          borderRadius={"50%"}
          fontSize={"sm"}
          color={"lightText"}
          InputLeftElement={
            <Icon
              as={<Feather name="search" size={24} color="black" />}
              size={7}
              ml="2"
              color="muted.400"
            />
          }
          InputRightElement={
            <Icon
              as={<Entypo name="list" size={24} color="black" />}
              size={7}
              mr="2"
              color="muted.400"
            />
          }
        />
      </Box>
      <CoffeeCategories navigation={navigation} />
    </Box>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
