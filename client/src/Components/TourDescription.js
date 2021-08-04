import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import data from "../../assets/data/tours1.json";
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";

export default function TourDescription() {
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
              {data.startLocation.description}
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
              {data.locations.length}{" "}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.guides}>
        <Text style={styles.title}>YOUR TOUR GUIDES</Text>
        <View style={styles.guideContainer}>
          <View style={styles.guideProf}>
            <Image
              source={require("../../assets/data/img/users/user-1.jpg")}
              style={styles.image}
            />
            <View style={styles.guideName}>
              <Text style={styles.guideRole}>Lead Guide </Text>
              <Text style={styles.guideName}>Alex Alex</Text>
            </View>
          </View>
          <View style={styles.guideProf}>
            <Image
              source={require("../../assets/data/img/users/user-2.jpg")}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.guideName}>
              <Text style={styles.guideRole}>Tour Guide </Text>
              <Text style={styles.guideName}>Jennifer Hardy</Text>
            </View>
          </View>
        </View>
      </View>
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
  guides: {
    marginVertical: 10,
    width: "100%",
  },
  guideContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  guideProf: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  guideRole: {
    fontWeight: "700",
  },
  guideName: {},
  descrContainer: {
    width: Dimensions.get("screen").width - 30,
  },
});
