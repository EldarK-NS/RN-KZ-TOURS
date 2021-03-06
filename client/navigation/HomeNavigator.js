import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../src/Screens/HomeScreen";
import TourScreen from "../src/Screens/TourScreen";
import MapReviewScreen from "./../src/Screens/MapReviewScreen";
import LogIn from "../src/Screens/LogIn";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import SignUp from "../src/Screens/SignUp";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";
// import { addTourToFavorite } from "../redux/actions/users";
// import axios from "axios";

const HomeStack = createStackNavigator();
export default function HomeNavigator() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const user = useSelector((state) => state.auth);
  //   console.log(user);

  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      // screenOptions={{
      //   headerShown: false,
      // }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Kazakhstan Tours",
          headerRight: () => {
            return !user.isAuthenticated ? (
              <AntDesign
                name="login"
                size={24}
                color="black"
                onPress={() => {
                  navigation.navigate("Login");
                }}
                style={{ marginRight: 20 }}
              />
            ) : (
              <AntDesign
                name="logout"
                size={24}
                color="black"
                onPress={() => dispatch(logout())}
                style={{ marginRight: 20 }}
              />
            );
          },
        }}
      />

      <HomeStack.Screen
        name="Tour"
        component={TourScreen}
        options={({ navigation, route }) => ({
          headerTitle: route.params.title,
        })}
      />
      {/* <HomeStack.Screen
        name="Tour"
        component={TourScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => dispatch(addTourToFavorite(route.params.id))}
              style={{ marginRight: 20 }}
            >
              <AntDesign name="pluscircleo" size={30} color="red" />
            </TouchableOpacity>
          ),
        })}
      /> */}
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
