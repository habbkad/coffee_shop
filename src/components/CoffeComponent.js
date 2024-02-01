import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, VStack, Image, Box, Center, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
const CoffeComponent = () => {
  return (
    <Box mt={5} ml={3}>
      <Box
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
              uri: "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?1&w=1480&t=st=1706805301~exp=1706805901~hmac=aa0c4cd308365042db510c43eae99b2d45baf6bd3225a8da4ef9ee89ac20064d",
            }}
            alt="Alternate Text"
            h={122}
            w={"95%"}
          />
        </Center>

        <Box display={"flex"} flexDir={"row"} pb={1}>
          <Box mx={2} w={"60%"}>
            <Text color={"lightText"} fontSize={"xl"}>
              Cappacino
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
      </Box>
    </Box>
  );
};

export default CoffeComponent;

const styles = StyleSheet.create({});
