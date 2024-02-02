import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import HomeScreen from "../components/HomeScreen";
import { ScrollView } from "native-base";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView w={"100%"}>
        <HomeScreen navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
