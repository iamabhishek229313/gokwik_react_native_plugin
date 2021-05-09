import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home } from "./src/home";
import { UPIPayScreen } from "./src/screens/upi_pay_screen";
import { OTPScreen } from "./src/screens/otp_screen";

import { View, Text } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UPIPayScreen" component={UPIPayScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
