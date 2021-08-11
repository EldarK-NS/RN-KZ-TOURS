import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useRoute } from "@react-navigation/core";

import Map from "../Components/Map";
import GuideProfile from "../Components/GuideProfile";

//TODO add info to marker, make guides view

export default function MapReviewScreen() {
  const route = useRoute();
  const tour = useSelector((state) => state.tours.oneTour.data);

  return (
    <View>
      <Map data={tour.locations} />
      <View style={styles.guides}>
        <Text style={styles.title}>YOUR TOUR GUIDES</Text>
        <View style={styles.guideContainer}>
          {tour.guides == 0 ? (
            <Text>Loading...</Text>
          ) : (
            <FlatList
              data={tour.guides}
              renderItem={(item) => <GuideProfile guide={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  guides: {
    marginVertical: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  guideContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    alignSelf: "center",
    fontWeight: "bold",
  },
});
