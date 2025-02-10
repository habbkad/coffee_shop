import { Box, Button, FlatList, Text } from "native-base";
import React, { useCallback, useMemo, useRef } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import CartComponent from "../components/CartComponent";
import { MaterialIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UseSelector, useSelector } from "react-redux";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import CheckoutComponent from "../components/CheckoutComponent";
const Cart = ({ navigation }) => {
  const { orders } = useSelector((state) => state.cart);
  console.log(orders);

  // ref
  const bottomSheetModalRef = useRef();

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  const data = [1, 3, 3, 4];
  return (
    <GestureHandlerRootView>
      <Box>
        <Box display={"flex"} h={"85%"}>
          <FlatList
            w={"100%"}
            data={orders}
            renderItem={(item) => {
              return <CartComponent navigation={navigation} item={item} />;
            }}
          />
        </Box>
        <BottomSheetModalProvider>
          <Box
            h={"15%"}
            w={"100%"}
            display={"flex"}
            flexDir={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button
              leftIcon={
                <MaterialIcons name="payment" size={27} color="white" />
              }
              width={"90%"}
              display={"flex"}
              flexDir={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              backgroundColor={"red.600"}
              borderRadius={"50%"}
              onPress={handlePresentModalPress}
            >
              <Text color={"lightText"} fontSize={"lg"} letterSpacing={2}>
                Go to payment
              </Text>
            </Button>{" "}
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
            >
              <CheckoutComponent />
            </BottomSheetModal>
          </Box>
        </BottomSheetModalProvider>
      </Box>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default Cart;
