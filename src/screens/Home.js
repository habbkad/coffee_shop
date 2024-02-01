import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import HomeScreen from "../components/HomeScreen";
import { ScrollView } from "native-base";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView w={"100%"}>
        <HomeScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
