import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Alert,
  Dimensions,
  Linking,
} from "react-native";

import RNUpiPayment from "react-native-upi-pay";

export function Home({ navigation }) {
  const { width, height } = Dimensions.get("window");

  const [phoneNumber, changeNo] = useState("");

  function successCallback(data) {}
  function failureCallback(data) {}

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "flex-start",
          flex: 1,
          width: width / 1.2,
        }}
      >
        <TextInput
          placeholder="Enter your phone number"
          keyboardType="numeric"
          onChangeText={(val) => changeNo(val)}
          style={{
            borderColor: "black",
            borderWidth: 1,
            fontSize: 16,
            padding: 8,
            borderRadius: 5,
          }}
        />
        <View style={{ marginTop: 20 }}>
          <Button
            title="Pay now using UPI"
            onPress={() => navigation.navigate("UPIPayScreen")}
          />
        </View>
        <View
          style={{
            marginTop: 16,
          }}
        >
          <Button
            title="Cash on delivery OTP"
            onPress={async () => {
              navigation.navigate("OTPScreen");
              //   RNUpiPayment.initializePayment(
              //     {
              //       vpa: "7004883767@upi", // or can be john@ybl or mobileNo@upi
              //       payeeName: "John Doe",
              //       amount: "1",
              //       transactionRef: "aasf-332-aoei-fn",
              //     },
              //     successCallback,
              //     failureCallback
              //   );
              // console.log("Type of success : " + typeof successCallback);
              // RNUpiPayment.initializePayment(
              //   {
              //     vpa: "something@bank", //your upi address like 12345464896@okhdfcbank
              //     payeeName: " abc", // payee name
              //     amount: "1", //amount
              //     transactionNote: "Testing Upi", //note of transaction
              //     transactionRef: "aasf-332-aoei-fn", //some refs to aknowledge the transaction
              //   },
              //   "PAYTM",
              //   successCallback,
              //   failureCallback
              // );
              //   await Linking.addEventListener(
              //     "paytmmp://upi/pay?pa=7024293076@upi&pn=DK Bose&mc=0000&tr=123456789ABCDEFG&tn=HelloWorld&am=11&cu=INR",
              //     (res) => {
              //       console.log("Listener data : " + res);
              //     }
              //   );
              //   await Linking.openURL(
              //     "paytmmp://upi/pay?pra=7024293076@upi&pn=DK Bose&mc=0000&tr=123456789ABCDEFG&tn=HelloWorld&am=11&cu=INR",
              //   ).then((val) => {
              //     console.log("Linking response : " + val);
              //   });
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  boldText: {
    fontSize: 18,
    fontWeight: "200",
  },
});
