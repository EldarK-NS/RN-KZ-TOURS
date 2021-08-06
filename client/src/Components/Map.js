import React from "react";
import { StyleSheet, View, Dimensions, ActivityIndicator } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

import { useRoute } from "@react-navigation/core";
import { useSelector } from "react-redux";

export default function Map() {
  const route = useRoute();
  const tourId = route.params.id;
  const tour = useSelector(
    (state) =>
      state.tours.tours.data.find((item) => item._id === tourId).locations
  );

  if (!tour) {
    return (
      <ActivityIndicator size="large" color="blue" style={styles.loader} />
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        style={styles.map}
        initialRegion={{
          latitude: tour[0].coordinates[1],
          longitude: tour[0].coordinates[0],
          latitudeDelta: 3.5,
          longitudeDelta: 3.5,
        }}
      >
        {tour.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.coordinates[1],
              longitude: marker.coordinates[0],
            }}
            title={marker.description}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height * 0.6,
    width: "100%",
    backgroundColor: "blue",
  },
  map: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 200,
  },
});
