import { Box, IconButton, Image, Text } from "native-base";
import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

const CartComponent = ({ navigate, item }) => {
  console.log(item.item);
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
            source={{
              uri: item.item.image,
            }}
            alt="Alternate Text"
            h={75}
            w={"20%"}
            p={3}
          />
          <Box display={"flex"} flexDir={"row"} pb={1} w={"70%"} ml={3}>
            <Box mx={1} w={"60%"}>
              <Text color={"lightText"} fontSize={"xl"} letterSpacing={2}>
                Cappacino
              </Text>
              <Text fontSize={"9px"} color={"lightText"}>
                With Chocolate
              </Text>
              <Text fontSize={"xl"} color={"lightText"} mt={1}>
                50k
              </Text>
            </Box>
            <Box w={"40%"} justifyContent={"center"} alignContent={"center"}>
              <Box
                w={"50%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                backgroundColor={"gray.900"}
              >
                <Text color={"lightText"} fontSize={"lg"} letterSpacing={2}>
                  {`+${item.item.number}`}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Pressable>
    </Box>
  );
};

const styles = StyleSheet.create({});

export default CartComponent;
