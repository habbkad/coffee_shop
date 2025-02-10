import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, VStack, Image, Box, Center, Icon, Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";
const CoffeComponent = ({ navigation, item }) => {
  console.log(item);
  return (
    <Box mt={5} ml={3}>
      <Pressable
        onPress={() => navigation.navigate("Details", { data: item })}
        border="1"
        w={"180px"}
        borderRadius="xl"
        borderColor="gray.800"
        backgroundColor="gray.900"
        shadow={2}
      >
        <Center p={1}>
          <Image
            borderRadius={15}
            source={{
              uri: item.item.image,
            }}
            alt="Alternate Text"
            h={122}
            w={"95%"}
          />
        </Center>

        <Box display={"flex"} flexDir={"row"} pb={1}>
          <Box mx={2} w={"60%"}>
            <Text color={"lightText"} fontSize={"xl"}>
              {item.item.name}
            </Text>
            <Text fontSize={"9px"} color={"lightText"}>
              With Chocolate
            </Text>
            <Text fontSize={"md"} color={"lightText"}>
              50k
            </Text>
          </Box>
          <Box w={"40%"} justifyContent={"center"} alignContent={"center"}>
            <Icon
              as={<Ionicons name="add-circle-sharp" size={33} />}
              size={10}
              ml="2"
              color="red.900"
            />
          </Box>
        </Box>
      </Pressable>
    </Box>
  );
};

export default CoffeComponent;

const styles = StyleSheet.create({});
