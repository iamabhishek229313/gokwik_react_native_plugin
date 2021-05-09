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
} from "react-native";

export function OTPScreen() {
  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <Text>UPI Payment Screen</Text>
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
