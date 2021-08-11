import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";

export default function TourDescription({ data }) {
  if (!data) {
    return <ActivityIndicator size="large" color="blue" />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.facts}>
        <Text style={styles.title}>QUICK FACTS</Text>
        <View style={styles.info}>
          <View style={styles.infoContainer}>
            <MaterialIcons name="date-range" size={18} color="#5850f2" />
            <Text style={styles.infoText}>
              <Text style={{ fontWeight: "700" }}>NEXT DATE:</Text> June 2021
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Entypo name="bar-graph" size={16} color="#5850f2" />
            <Text style={styles.infoText}>
              <Text style={{ fontWeight: "700" }}>DIFFICULTY:</Text>{" "}
              {data.difficulty}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Ionicons name="ios-person-outline" size={18} color="#5850f2" />
            <Text style={styles.infoText}>
              <Text style={{ fontWeight: "700" }}>PARTICIPANTS:</Text>{" "}
              {data.maxGroupSize}{" "}
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <FontAwesome5 name="star" size={16} color="#5850f2" />
            <Text style={styles.infoText}>
              {" "}
              <Text style={{ fontWeight: "700" }}>RATING:</Text>{" "}
              {data.ratingsAverage}{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.descrContainer}>
        <Text style={styles.title}>ABOUT TOUR</Text>
        <Text style={styles.text}>{data.description} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: Dimensions.get("window").width - 30,
  },
  facts: {},
  title: {
    alignSelf: "center",
    fontWeight: "bold",
  },
  line: {
    width: 150,
    height: 1,
    backgroundColor: "black",
    marginVertical: 5,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  infoText: {
    fontSize: 12,
    marginLeft: 3,
  },

  descrContainer: {
    width: Dimensions.get("screen").width - 30,
  },
});
