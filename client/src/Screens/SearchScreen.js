import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  Text,
} from "react-native";
import TourItem from "../Components/TourItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllTours, getAllSortingTours } from "../../redux/actions/tours";

//TODO отредактировать кнопки сортировки, по "space-around" на маленьких экранах вылезут за пределы

export default function SearchScreen() {
  const [price, setPrice] = useState("price");
  const [rating, setRating] = useState("ratingsAverage");
  const [sortParam, setSortParam] = useState(price);
  const dispatch = useDispatch();
  const fetchedData = useSelector((state) => state.tours.tours);
  const loading = useSelector((state) => state.app.loading);

  const handleSortPrice = () => {
    let init;
    if (price === "price") {
      init = "-price";
    } else {
      init = "price";
    }
    setPrice(init);
    setSortParam(init);
  };
  const handleSortRating = () => {
    let init;
    if (rating === "ratingsAverage") {
      init = "-ratingsAverage";
    } else {
      init = "ratingsAverage";
    }
    setRating(init);
    setSortParam(init);
  };

  useEffect(() => {
    dispatch(getAllSortingTours(sortParam));
  }, [sortParam]);

  if (!fetchedData || loading) {
    return (
      <ActivityIndicator size="large" color="blue" style={styles.loader} />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.sortContainer}>
        <Pressable onPress={handleSortPrice} style={styles.sortButton}>
          <Text style={styles.buttonTitle}>
            {price === "price" ? "Min price" : "Max price"}
          </Text>
        </Pressable>
        <Pressable onPress={handleSortRating} style={styles.sortButton}>
          <Text style={styles.buttonTitle}>
            {rating === "ratingsAverage" ? "High rating" : "Low rating"}
          </Text>
        </Pressable>
        <Pressable style={styles.sortButton}>
          <Text style={styles.buttonTitle}>Max reviews</Text>
        </Pressable>
      </View>
      <FlatList
        data={fetchedData.data}
        renderItem={(el) => <TourItem data={el.item} />}
        keyExtractor={(el) => el._id}
        showsVerticalScrollIndicator={false}
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
  sortContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  sortButton: {
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 15,
    padding: 5,
    marginHorizontal: 10,
  },
  buttonTitle: {
    color: "white",
    fontWeight: "bold",
  },
});
