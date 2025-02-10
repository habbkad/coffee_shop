import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import {
  Box,
  Text,
  Image,
  Center,
  IconButton,
  Modal,
  ScrollView,
  Button,
} from "native-base";
import chocolate from "../assets/chocolate.png";
import bean from "../assets/bean.png";
import { addOrder } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const CoffeeDetails = ({ navigation, data }) => {
  const [number, setNumber] = useState(1);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [size, setSize] = React.useState("md");
  const [coffeeSize, setCoffeeSize] = useState("medium");
  console.log(coffeeSize);

  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.cart);

  // console.log(orders);
  return (
    <Box w={"100%"} position={"relative"}>
      <Box position={"relative"} h={"55%"}>
        <Image
          borderRadius={"xl"}
          source={{
            uri: data.item.image,
          }}
          alt="Alternate Text"
          h={"500"}
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
          h={"20%"}
          w={"100%"}
          bottom={5}
          px={5}
          display={"flex"}
          flexDir={"row"}
          backgroundColor={"rgba(0,0,0,0.3)"}
        >
          <Box>
            <Pressable>
              <Text
                color={"lightText"}
                fontSize={"3xl"}
                fontWeight={"semibold"}
              >
                {data.item.name}
              </Text>
              <Text color={"lightText"} fontSize={"md"}>
                with chocolate
              </Text>
            </Pressable>
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
            h={50}
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

      <Box mt={10} px={3}>
        <Text color={"lightText"} fontSize={"xl"} mb={3}>
          Coffee Size
        </Text>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-around"}
          mt={1}
        >
          <Box
            h={30}
            backgroundColor={coffeeSize === "small" ? "red.800" : "black"}
            borderRadius={"50%"}
            display={"flex"}
            borderColor={"red.800"}
            borderWidth={"1"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Pressable
              onPress={() => {
                setCoffeeSize("small");
              }}
            >
              <Text
                color={"lightText"}
                fontSize={"md"}
                textAlign={"center"}
                mx={6}
              >
                Small
              </Text>
            </Pressable>
          </Box>
          <Box
            h={30}
            backgroundColor={coffeeSize === "medium" ? "red.800" : "black"}
            borderRadius={"50%"}
            borderColor={"red.800"}
            borderWidth={"1"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Pressable
              onPress={() => {
                setCoffeeSize("medium");
              }}
            >
              <Text
                color={"lightText"}
                fontSize={"md"}
                textAlign={"center"}
                mx={6}
              >
                Medium
              </Text>
            </Pressable>
          </Box>
          <Box
            h={30}
            backgroundColor={coffeeSize === "large" ? "red.800" : "black"}
            borderRadius={"50%"}
            display={"flex"}
            borderColor={"red.800"}
            borderWidth={"1"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Pressable
              onPress={() => {
                setCoffeeSize("large");
              }}
            >
              <Text
                color={"lightText"}
                fontSize={"md"}
                textAlign={"center"}
                mx={6}
              >
                Large
              </Text>
            </Pressable>
          </Box>
        </Box>
      </Box>
      <Box mt={5}>
        <Center>
          <Box
            h={50}
            backgroundColor={"gray.900"}
            w={"95%"}
            borderRadius={"50%"}
            display={"flex"}
            flexDir={"row"}
            justifyContent={"space-around"}
            px={0}
            alignItems={"center"}
          >
            <Box borderColor={"white"} borderRightWidth={1} w={"50%"}>
              <Box
                h={33}
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
                  icon={<AntDesign name="minus" size={12} color="#A6A6AA" />}
                  borderRadius="full"
                  onPress={() => {
                    setNumber(number - 1);
                  }}
                />
                <Text fontSize={"md"} color={"lightText"}>
                  {number}
                </Text>
                <IconButton
                  icon={<AntDesign name="plus" size={12} color="white" />}
                  borderRadius="full"
                  onPress={() => {
                    setNumber(number + 1);
                  }}
                />
              </Box>
            </Box>

            <Box paddingRight={8}>
              <Text fontSize={"lg"} color={"lightText"}>
                {` $${data.item.price * number}.00`}
              </Text>
            </Box>
          </Box>
          <Box
            mt={5}
            h={45}
            background={"red.600"}
            w={"80%"}
            display={"flex"}
            flexDir={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"50%"}
          >
            <Pressable
              onPress={() => {
                data.item.number = number;
                data.item.size = coffeeSize;
                data.item.cost = data.item.price * number;
                setSize("lg");
                setModalVisible(!modalVisible);
              }}
            >
              <Text fontSize={"lg"} color={"lightText"}>
                Add to Cart
              </Text>
            </Pressable>
          </Box>
        </Center>
        <Center></Center>
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
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
        <Modal.Content maxH="212">
          <Modal.CloseButton />
          <Modal.Header>Place Order</Modal.Header>
          <Modal.Body>
            <Box>
              <Text>
                {" "}
                You Bought a :{" "}
                <Text colorScheme={"muted"}>{data.item.name}</Text>
              </Text>
              <Text>
                {" "}
                Price : <Text colorScheme={"muted"}>${data.item.price}.00</Text>
              </Text>
            </Box>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  navigation.goBack();
                  dispatch(addOrder(data.item));
                }}
              >
                Place order
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

const styles = StyleSheet.create({});

export default CoffeeDetails;
