import { Box, Button, Image, Input, Text } from "native-base";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { StripeProvider, CardField } from "@stripe/stripe-react-native";
import { useSelector } from "react-redux";
const CheckoutComponent = () => {
  const { cost } = useSelector((state) => state.cart);
  const amount = 1000000; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const STRIPE_PUBLBISHABLE_KEY =
    "pk_test_51OlARQAk7CJwckLfMKgVhtWlP21A9lcfkIAEV4Fch2Hd8E7z3oeCsEUvsyGRRKUoiv2piY8Uhe43DPZNlcBDjvqV0035O1LK6u";
  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currency: "usd",
        items: [{ id: "id" }],
      }),
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };
  const handlePayPress = async () => {
    const clientSecret = await fetchPaymentIntentClientSecret();
    const billingDetails = {
      email: "email@stripe.com",
      phone: "+48888000888",
      addressCity: "Houston",
      addressCountry: "US",
      addressLine1: "1459  Circle Drive",
      addressLine2: "Texas",
      addressPostalCode: "77063",
    };
    const { error, paymentIntent } = await confirmPayment(clientSecret, {
      type: "Card",
      billingDetails,
    });

    if (error) {
      // Handle error
    } else if (paymentIntent) {
      // Handle success
    }
    // step 2
    // step 3
    // step 4
  };

  return (
    <Box>
      <Box pl={7}>
        <Text fontSize={"2xl"} fontWeight={"semibold"}>
          Check out:
        </Text>
      </Box>
      <Box
        mt={5}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-between"}
          w={"80%"}
        >
          <Text>Total (tax Ecl):</Text>
          <Text fontSize={"xl"} ml={10}>
            {cost}.00
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-between"}
          w={"80%"}
        >
          <Text>Tax (15%):</Text>
          <Text fontSize={"xl"} ml={10}>
            {Math.floor(0.15 * cost)}.00
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-between"}
          w={"80%"}
        >
          <Text>Total:</Text>
          <Text fontSize={"xl"} ml={10}>
            {Math.floor(0.15 * cost) + cost}.00
          </Text>
        </Box>
        <Box display={"flex"} flexDir={"row"} mt={5}>
          <Input mx="3" placeholder="Discount code" w="70%" size={"lg"} />
        </Box>
        <StripeProvider publishableKey={STRIPE_PUBLBISHABLE_KEY}>
          <View style={styles.container}>
            <CardField
              postalCodeEnabled={false}
              autofocus
              style={styles.cardField}
              cardStyle={{
                textColor: "#1c1c1c",
              }}
            />
            <Button onPress={handlePayPress} size={"lg"}>
              <Text>Pay</Text>
            </Button>
          </View>
        </StripeProvider>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  cardField: {
    height: 50,
  },
});

export default CheckoutComponent;
