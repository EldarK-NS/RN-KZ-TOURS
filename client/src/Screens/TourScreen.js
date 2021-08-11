import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/core";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";

import Banner from "../Components/Banner";
import { getTour } from "../../redux/actions/tours";
import TourDescription from "../Components/TourDescription";
import { addTourToFavorite } from "../../redux/actions/users";
import BottomSheetReviews from "../Components/BottomSheetReviews";
import { getReviewsFromTour } from "./../../redux/actions/reviews";

//TODO доделать оповещение об ошибке already exists, выбрасывает из приложения Alert

const TourScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const tourID = route.params.id;

  const tour = useSelector((state) => state.tours.oneTour.data);
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getTour(tourID));
    dispatch(getReviewsFromTour(tourID));
  }, [tourID]);

  const goToMap = () => {
    navigation.navigate("Map", {
      id: tour._id,
      title: tour.name,
    });
  };

  let c = 1;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        if (auth.isAuthenticated) {
          return (
            <TouchableOpacity
              onPress={() => {
                dispatch(addTourToFavorite(tourID));
                //  console.log("hello");
              }}
              style={{ marginRight: 20 }}
            >
              <AntDesign name="pluscircleo" size={30} color="red" />
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  "If you want to add this Tour to your favorites, please Log In",
                  "Go to Log In Page",
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    { text: "OK", onPress: () => navigation.navigate("Login") },
                  ]
                );
              }}
              style={{ marginRight: 20 }}
            >
              <AntDesign name="pluscircleo" size={30} color="black" />
            </TouchableOpacity>
          );
        }
      },
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Banner />
        <TourDescription data={tour} />
        <Pressable style={styles.button} onPress={goToMap}>
          <Text>Tour Map & Guides</Text>
        </Pressable>
        <View style={styles.line} />
        {!tour ? (
          <Text>Loading...</Text>
        ) : (
          <BottomSheetReviews data={tour.reviews} />
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
  bottomBlock: {
    flex: 1,
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
