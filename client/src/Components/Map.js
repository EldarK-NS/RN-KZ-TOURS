import React from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { StyleSheet, View, Dimensions, ActivityIndicator } from "react-native";

//TODO POLYLINE!!!

export default function Map({ data }) {
  if (!data) {
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
          latitude: data[0].coordinates[1],
          longitude: data[0].coordinates[0],
          latitudeDelta: 3.5,
          longitudeDelta: 3.5,
        }}
      >
        {data.map((marker, index) => (
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
