import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Review from "./Review";

export default function ReviewsList({ data }) {
  return (
    <View>
      <FlatList data={data} renderItem={() => <Review data={data} />} />
    </View>
  );
}

const styles = StyleSheet.create({});
