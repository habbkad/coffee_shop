import React, { useEffect } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Box, Text, Icon, Image, FlatList } from "native-base";
import {
  Ionicons,
  Fontisto,
  Entypo,
  FontAwesome5,
  FontAwesome6,
} from "@expo/vector-icons";
import CoffeComponent from "./CoffeComponent";
import { useState } from "react";

const CoffeeCategories = ({ navigation }) => {
  const [coffee, setCoffee] = useState([]);
  const [type, setType] = useState("cappuccino");
  const cappuccino = [
    {
      image:
        "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?1&w=1480&t=st=1706805301~exp=1706805901~hmac=aa0c4cd308365042db510c43eae99b2d45baf6bd3225a8da4ef9ee89ac20064d",
      name: "Classic",
      price: 67,
      number: 0,
    },
    {
      image:
        "https://i.pinimg.com/474x/7c/30/b6/7c30b68cb52c7a216ebe931374688d20.jpg",
      name: "Dry",
      price: 62,
      number: 0,
    },
    {
      image:
        "https://i.pinimg.com/474x/b7/e5/79/b7e57995ec030089679ce92eb1785354.jpg",
      name: "Decaf",
      price: 71,
      number: 0,
    },
    {
      image:
        "https://i.pinimg.com/474x/29/7c/8e/297c8ea6ee897c728294f846898de259.jpg",
      name: "Skinny",
      price: 47,
      number: 0,
    },
    {
      image:
        "https://i.pinimg.com/474x/20/1e/c0/201ec04f9916df3e430fdc3bee9e96c2.jpg",
      name: "Caramel",
      price: 59,
      number: 0,
    },
  ];
  const coldBrew = [
    {
      image:
        "https://i.pinimg.com/564x/1b/cd/26/1bcd26f405513a4d450f7678028f0e6e.jpg",
      name: "Nitro",
      price: 60,
      number: 0,
    },
    {
      image:
        "https://i.pinimg.com/474x/d4/8a/93/d48a930c15959cb36e59261139d7b4e9.jpg",
      name: "Mocha",
      price: 63,
      number: 0,
    },
    {
      image:
        "https://i.pinimg.com/474x/d2/0c/e6/d20ce6b882f53f35c58738dab963434b.jpg",
      name: "Macchiato",
      price: 74,
      number: 0,
    },
    {
      image:
        "https://i.pinimg.com/474x/73/09/f2/7309f28cc4534a3ec7dee3bd0a49c8ad.jpg",
      name: "Classic ",
      price: 74,
      number: 0,
    },
    {
      image:
        "https://i.pinimg.com/474x/d4/72/8a/d4728ad5bcf2dc477d2be78eb9276b25.jpg",
      name: "Frappe ",
      price: 74,
      number: 0,
    },
  ];
  const expresso = [
    {
      image:
        "https://i.pinimg.com/474x/20/59/84/2059848371e90afc6673102e67ef1e20.jpg",
      name: "Red Eye",
      price: 50,
      number: 0,
    },
    {
      image:
        "https://i.pinimg.com/564x/a3/5a/9c/a35a9ca86168dd204803e484afafe5e0.jpg",
      name: "Doppio",
      price: 54,
      number: 0,
    },
    {
      image:
        "https://i.pinimg.com/474x/ef/b2/2c/efb22cbcfab1410b503ddcdcede78589.jpg",
      name: "Americano",
      price: 45,
      number: 0,
    },

    {
      image:
        "https://i.pinimg.com/474x/74/77/58/747758467433db02dbf600e61351842f.jpg",
      name: "Black Eye",
      price: 45,
      number: 0,
    },
    {
      image:
        "https://i.pinimg.com/474x/74/77/58/747758467433db02dbf600e61351842f.jpg",
      name: "Ristretto",
      price: 45,
      number: 0,
    },
  ];
  useEffect(() => {
    setCoffee([...cappuccino]);
  }, []);
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
          <Box
            bgColor={type == "cappuccino" ? "red.700" : "black"}
            borderRadius={"50%"}
            px={1}
          >
            <Pressable
              onPress={() => {
                setCoffee([...cappuccino]);
                setType("cappuccino");
              }}
            >
              <Text
                color={"lightText"}
                fontSize={"lg"}
                fontWeight={"semibold"}
                textAlign={"end"}
              >
                <Fontisto name="coffeescript" size={20} color="white" />{" "}
                Cappacino
              </Text>
            </Pressable>
          </Box>
          <Box
            bgColor={type == "cold brew" ? "red.700" : "black"}
            borderRadius={"50%"}
            px={1}
          >
            <Pressable
              onPress={() => {
                setCoffee([...coldBrew]);
                setType("cold brew");
              }}
            >
              <Text color={"lightText"} fontSize={"md"} fontWeight={"semibold"}>
                <FontAwesome6 name="mug-saucer" size={20} color="white" /> Cold
                Brew
              </Text>
            </Pressable>
          </Box>
          <Box
            bgColor={type == "espresso" ? "red.700" : "black"}
            borderRadius={"50%"}
            px={1}
          >
            <Pressable
              onPress={() => {
                setCoffee([...expresso]);
                setType("espresso");
              }}
            >
              <Text color={"lightText"} fontSize={"md"} fontWeight={"semibold"}>
                <FontAwesome5 name="mug-hot" size={23} color="white" /> Expresso
              </Text>
            </Pressable>
          </Box>
        </Box>
      </Box>
      <FlatList
        w={"100%"}
        data={coffee}
        numColumns={2}
        renderItem={(item) => {
          return <CoffeComponent navigation={navigation} item={item} />;
        }}
      />
    </Box>
  );
};

const styles = StyleSheet.create({});

export default CoffeeCategories;
