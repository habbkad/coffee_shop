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
        pl={5}
        alignItems={"center"}
      >
        <Avatar
          bg="indigo.500"
          alignSelf="left"
          size="lg"
          source={{
            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
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
            Bintara, Bekasi
          </Text>
        </Box>

        <Ionicons name="notifications-outline" size={30} color="white" />
      </Box>
      <Box mt={4} display={"flex"} flexDir={"row"} ml={4}>
        <Text color={"lightText"} fontSize={"2xl"} fontWeight={"semibold"}>
          Good morning,
        </Text>
        <Text color={"lightText"} fontSize={"2xl"} fontWeight={"semibold"}>
          Dityo
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
