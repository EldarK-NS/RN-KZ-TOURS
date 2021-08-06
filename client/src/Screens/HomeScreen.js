import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Tours } from "../Components/Tours";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tours />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
