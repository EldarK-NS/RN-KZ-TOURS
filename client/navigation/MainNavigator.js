import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import SearchScreen from "./../src/Screens/SearchScreen";
import Favorite from "./../src/Screens/Favorite";
import ProfileScreen from "./../src/Screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Entypo name="home" size={size} color={color} />;
          }
          if (route.name === "Search") {
            return <Feather name="search" size={size} color={color} />;
          }
          if (route.name === "Favorite") {
            return <FontAwesome name="heart" size={size} color={color} />;
          }
          if (route.name === "Profile") {
            return (
              <Ionicons name="ios-person-sharp" size={size} color={color} />
            );
          }
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
