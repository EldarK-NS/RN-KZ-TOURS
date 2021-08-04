import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../src/Screens/HomeScreen";
import TourScreen from "../src/Screens/TourScreen";
import MapReviewScreen from "./../src/Screens/MapReviewScreen";
import LogIn from "../src/Screens/LogIn";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import SignUp from "../src/Screens/SignUp";

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Kazakhstan Tours",
          headerRight: () => (
            <AntDesign
              name="login"
              size={24}
              color="black"
              onPress={() => {
                navigation.navigate("Login");
              }}
              style={{ marginRight: 20 }}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Tour"
        component={TourScreen}
        options={{
          title: "Tour",
        }}
      />
      <HomeStack.Screen
        name="Map"
        component={MapReviewScreen}
        options={{
          title: "Tour Map & Reviews",
        }}
      />
      <HomeStack.Screen
        name="Login"
        component={LogIn}
        options={{
          title: "Log-In",
        }}
      />
      <HomeStack.Screen
        name="Signup"
        component={SignUp}
        options={{
          title: "Sign-Up",
        }}
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({});
