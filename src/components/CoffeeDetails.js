import React from "react";
import { View, StyleSheet } from "react-native";
import { Box, Text, Image, Center, IconButton } from "native-base";
import chocolate from "../assets/chocolate.png";
import bean from "../assets/bean.png";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const CoffeeDetails = ({ navigation }) => {
  return (
    <Box h={"100%"} w={"100%"} position={"relative"}>
      <Box position={"relative"} h={"60%"}>
        <Image
          borderRadius={"xl"}
          source={{
            uri: "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?1&w=1480&t=st=1706805301~exp=1706805901~hmac=aa0c4cd308365042db510c43eae99b2d45baf6bd3225a8da4ef9ee89ac20064d",
          }}
          alt="Alternate Text"
          h={"550"}
        />
        <Box position={"absolute"} top={3} ml={4}>
          <IconButton
            onPress={() => navigation.goBack()}
            icon={<Ionicons name="chevron-back" size={26} color="white" />}
            borderRadius="full"
            bgColor={"gray.900"}
          />
        </Box>
        <Box
          position={"absolute"}
          h={"30%"}
          w={"100%"}
          bottom={5}
          px={5}
          display={"flex"}
          flexDir={"row"}
          backgroundColor={"rgba(0,0,0,0.3)"}
        >
          <Box>
            <Text color={"lightText"} fontSize={"3xl"} fontWeight={"semibold"}>
              Cappacino
            </Text>
            <Text color={"lightText"} fontSize={"md"}>
              with chocolate
            </Text>
          </Box>
          <Box></Box>
        </Box>
      </Box>

      <Box
        position={"absolute"}
        bgColor={"black"}
        h={"50%"}
        w={"100%"}
        borderTopRadius={"30px"}
        bottom={0}
        pt={4}
      >
        <Center>
          <Box
            h={70}
            backgroundColor={"gray.900"}
            w={"95%"}
            borderRadius={"50%"}
            display={"flex"}
            flexDir={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Box
              w={"25%"}
              borderRightWidth={1}
              borderColor={"gray.100"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image source={bean} mr={1} />
              <Text color={"lightText"} fontSize={"md"}>
                Coffee
              </Text>
            </Box>
            <Box
              borderRightWidth={1}
              borderColor={"gray.100"}
              w={"32%"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image source={chocolate} mr={1} />
              <Text color={"lightText"} fontSize={"md"}>
                Chocolate
              </Text>
            </Box>
            <Box>
              <Text color={"lightText"} fontSize={"md"}>
                Medium Roasted
              </Text>
            </Box>
          </Box>
        </Center>
      </Box>

      <Box mt={6} px={4}>
        <Text color={"lightText"} fontSize={"2xl"}>
          Coffee Size
        </Text>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-around"}
          mt={2}
        >
          <Box
            h={35}
            backgroundColor={"red.800"}
            borderRadius={"50%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text
              color={"lightText"}
              fontSize={"lg"}
              textAlign={"center"}
              mx={6}
            >
              Small
            </Text>
          </Box>
          <Box
            h={35}
            backgroundColor={"red.800"}
            borderRadius={"50%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text
              color={"lightText"}
              fontSize={"lg"}
              textAlign={"center"}
              mx={6}
            >
              Medium
            </Text>
          </Box>
          <Box
            h={35}
            backgroundColor={"red.800"}
            borderRadius={"50%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text
              color={"lightText"}
              fontSize={"lg"}
              textAlign={"center"}
              mx={6}
            >
              Large
            </Text>
          </Box>
        </Box>
      </Box>

      <Box mt={5} px={4}>
        <Text color={"lightText"} fontSize={"2xl"}>
          About
        </Text>
        <Text color={"lightText"} mt={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          inventore deleniti consequuntur impedit aut suscipit facere
          exercitationem nam, pariatur nemo voluptatibus consectetur
        </Text>
      </Box>

      <Box mt={10}>
        <Center>
          <Box
            h={70}
            backgroundColor={"gray.900"}
            w={"95%"}
            borderRadius={"50%"}
            display={"flex"}
            flexDir={"row"}
            justifyContent={"space-around"}
            px={4}
            alignItems={"center"}
          >
            <Box borderColor={"white"} borderRightWidth={1} w={"60%"}>
              <Box
                h={39}
                w={"90%"}
                borderColor={"gray.700"}
                borderWidth={1}
                borderRadius={"50%"}
                display={"flex"}
                flexDir={"row"}
                justifyContent={"space-around"}
                alignItems={"center"}
              >
                <IconButton
                  icon={<AntDesign name="minus" size={20} color="#A6A6AA" />}
                  borderRadius="full"
                />
                <Text fontSize={"lg"} color={"lightText"}>
                  1
                </Text>
                <IconButton
                  icon={<AntDesign name="plus" size={20} color="white" />}
                  borderRadius="full"
                />
              </Box>
            </Box>

            <Box>
              <Text fontSize={"xl"} color={"lightText"}>
                GH₵ 20.0
              </Text>
            </Box>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({});

export default CoffeeDetails;
