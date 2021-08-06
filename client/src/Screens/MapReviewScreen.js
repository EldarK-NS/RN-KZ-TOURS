import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Map from "../Components/Map";
import { useRoute } from "@react-navigation/core";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/actions/users";
import GuideProfile from "../Components/GuideProfile";

export default function MapReviewScreen() {
  const dispatch = useDispatch();
  const route = useRoute();
  const tourID = route.params.id;
  const tour = useSelector((state) =>
    state.tours.tours.data.find((item) => item._id === tourID)
  );

  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [tourID]);
  return (
    <View>
      <Map />
      <View style={styles.guides}>
        <Text style={styles.title}>YOUR TOUR GUIDES</Text>
        <View style={styles.guideContainer}>
          {users.length == 0 ? (
            <Text>Loading...</Text>
          ) : (
            <FlatList
              data={tour.guides}
              renderItem={(item) => {
                const guide = users.data.find((g) => g._id === item.item._id);
                return <GuideProfile guide={guide} />;
              }}
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
