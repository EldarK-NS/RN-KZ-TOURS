import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import Banner from "../Components/Banner";
import TourDescription from "../Components/TourDescription";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/core";
import Review from "../Components/Reviews/Review";

import { useSelector, useDispatch } from "react-redux";
import { getAllReviews } from "./../../redux/actions/reviews";

const TourScreen = () => {
  const sheetRef = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const tourID = route.params.id;
  const tour = useSelector((state) =>
    state.tours.tours.data.find((item) => item._id == tourID)
  );

  useEffect(() => {
    dispatch(getAllReviews());
  }, [tourID]);

  const reviews = useSelector((state) =>
    state.reviews.reviews.data?.filter((item) => item.tour == tourID)
  );

  const goToMap = () => {
    navigation.navigate("Map", {
      id: tour._id,
      title: tour.name,
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Banner />
        <TourDescription data={tour} />
        <Pressable style={styles.button} onPress={goToMap}>
          <Text>Tour Map & Guides</Text>
        </Pressable>
        <View style={styles.line} />
        {!reviews ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Pressable onPress={handlePress}>
              <Text style={styles.title}>REVIEWS</Text>
              <Review data={reviews[0]} />
            </Pressable>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default TourScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 180,
    height: 35,
    borderRadius: 20,
    backgroundColor: "gainsboro",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  line: {
    width: 150,
    height: 1,
    backgroundColor: "black",
    marginVertical: 5,
  },

  title: {
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 5,
  },
});
