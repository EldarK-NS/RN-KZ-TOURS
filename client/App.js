import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigation/MainNavigator";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { LogBox } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    getData();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
