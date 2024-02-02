import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import CoffeeDetails from "../components/CoffeeDetails";
import { ScrollView } from "native-base";

const Details = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView w={"100%"} h={"100%"}>
        <CoffeeDetails navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Details;
