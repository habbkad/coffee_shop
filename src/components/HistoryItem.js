import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Box, Center, Icon, IconButton, Image, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HistoryItem = ({ navigation }) => {
  return (
    <Box mb={3}>
      <Pressable
        onPress={() => navigation.navigate("Details")}
        border="1"
        w={"90%"}
        shadow={2}
      >
        <Box
          display={"flex"}
          flexDir={"row"}
          w={"100%"}
          justifyContent={"center"}
        >
          <Image
            borderRadius={15}
            source={{
              uri: "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?1&w=1480&t=st=1706805301~exp=1706805901~hmac=aa0c4cd308365042db510c43eae99b2d45baf6bd3225a8da4ef9ee89ac20064d",
            }}
            alt="Alternate Text"
            h={70}
            w={"20%"}
            p={3}
          />
          <Box display={"flex"} flexDir={"row"} w={"70%"} ml={3} py={0}>
            <Box mx={1} w={"60%"}>
              <Text color={"lightText"} fontSize={"lg"} letterSpacing={2}>
                Cappacino
              </Text>
              <Text fontSize={"9px"} color={"lightText"}>
                With Chocolate
              </Text>
              <Text fontSize={"lg"} color={"lightText"} mt={1}>
                50k
              </Text>
            </Box>
            <Box w={"30%"} justifyContent={"center"} alignContent={"center"}>
              <Box
                w={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <IconButton
                  onPress={() => navigation.goBack()}
                  icon={
                    <MaterialCommunityIcons
                      name="reload"
                      size={30}
                      color="white"
                    />
                  }
                  borderRadius="50%"
                  bgColor={"gray.800"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          borderBottomColor={"gray.800"}
          borderBottomWidth={"1"}
          pb={2}
        >
          <Text color={"gray.500"} fontSize={"sm"} letterSpacing={2}>
            11 Jul,2023 10:10 AM.
          </Text>
          <Text color={"gray.500"} fontSize={"sm"} letterSpacing={2}>
            {" "}
            Delivered
          </Text>
        </Box>
      </Pressable>
    </Box>
  );
};

const styles = StyleSheet.create({});

export default HistoryItem;
