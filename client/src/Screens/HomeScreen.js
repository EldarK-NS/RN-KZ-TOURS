import React, { useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { getAllTours } from "../../redux/actions/tours";
import TourItem from "../Components/TourItem";

export default function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTours());
    const willFocusSubscription = navigation.addListener("focus", () => {
      dispatch(getAllTours());
    });
    return willFocusSubscription;
  }, []);
  const fetchedData = useSelector((state) => state.tours.tours.data);
  //   console.log(fetchedData);
  if (!fetchedData) {
    return (
      <ActivityIndicator size="large" color="blue" style={styles.loader} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={fetchedData}
        renderItem={({ item }) => <TourItem data={item} />}
        keyExtractor={(el) => el._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 200,
  },
});
