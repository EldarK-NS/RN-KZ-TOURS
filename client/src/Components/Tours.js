import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import TourItem from "./TourItem";
import data from "../../assets/data/tours.json";

export default function Tours() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={(el) => <TourItem data={el.item} />}
        keyExtractor={(el) => el._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //     flexDirection: "row",
  //   },
});
