import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigation/MainNavigator";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { LogBox } from "react-native";

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
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
