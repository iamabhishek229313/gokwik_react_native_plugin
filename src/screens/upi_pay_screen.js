import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { AppColors } from "../utils/constants";

const DATA = [
  {
    id: "1",
    img: require("../assets/images/amazonPay.png"),
    title: "AMAZONPAY",
  },
  {
    id: "2",
    img: require("../assets/images/bhim.png"),
    title: "BHIM",
  },
  {
    id: "3",
    img: require("../assets/images/gpay.png"),
    title: "GPAY",
  },
  {
    id: "4",
    img: require("../assets/images/paytm.png"),
    title: "PAYTM",
  },
  {
    id: "5",
    img: require("../assets/images/phonePe.png"),
    title: "PHONEPE",
  },
];

export function UPIPayScreen() {
  const { width, height } = Dimensions.get("window");

  const renderItem = ({ item }) => (
    <View style={styles.upiItem}>
      <Image style={styles.upiImage} source={item.img} />
      <Text style={styles.upiTitle}>{item.title}</Text>
      <Ionicons name="arrow-forward" size={20} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "baseline",
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 8,
          marginBottom: 8,
          marginHorizontal: 24,
          marginVertical: 16,
        }}
      >
        <Text style={{ fontWeight: "normal", fontSize: 22 }}>Pay&nbsp;</Text>
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>₹1.00</Text>
      </View>
      <Text style={{ marginHorizontal: 24, marginVertical: 8 }}>
        Select any UPI option
      </Text>
      <View style={{flex:1,backgroundColor: "#fff" }}>
        <FlatList
          style={{
            marginTop: 8,
          }}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 16,
        }}
      >
        <Text style={{ fontSize: 10, color: "rgb(180,180,180)" }}>
          Powered By
        </Text>

        <Image
          resizeMode="contain"
          source={{
            uri: "https://s3.ap-south-1.amazonaws.com/cdn.gokwik.co/logo/gokwik-cod-logo.gif",
          }}
          style={{ height: height * 0.02, width: width * 0.2 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 8,
    padding: 0,
    backgroundColor: "rgb(240,240,240)",
  },
  boldText: {
    fontSize: 18,
    fontWeight: "200",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 16,
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  upiItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom:8,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 24,
    elevation: 1,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: "rgb(253,253,253)",
    shadowColor: '#fff',
    elevation:5,
  },
  upiImage: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  upiTitle: {
    fontSize: 16,
    flex: 1,
  },
});
