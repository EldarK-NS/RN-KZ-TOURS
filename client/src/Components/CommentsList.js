import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function CommentsList() {
  return (
    <View style={styles.container}>
      <Text>Comments</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height * 0.2,
    backgroundColor: "gainsboro",
    borderWidth: 1,
    borderEndColor: "grey",
  },
});
