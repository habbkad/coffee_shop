import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import CoffeeDetails from "../components/CoffeeDetails";
import { ScrollView } from "native-base";

const Details = ({ navigation, route }) => {
  const data = route.params.data;

  return (
    <SafeAreaView>
      <ScrollView w={"100%"} h={"100%"}>
        <CoffeeDetails navigation={navigation} data={data} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Details;
