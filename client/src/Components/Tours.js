import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import TourItem from "./TourItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllTours } from "./../../redux/actions/tours";

export const Tours = () => {
  const dispatch = useDispatch();
  const fetchedData = useSelector((state) => state.tours.tours);
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    dispatch(getAllTours());
  }, []);

  if (!fetchedData || loading) {
    return (
      <ActivityIndicator size="large" color="blue" style={styles.loader} />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={fetchedData.data}
        renderItem={(el) => <TourItem data={el.item} />}
        keyExtractor={(el) => el._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 200,
  },
});
