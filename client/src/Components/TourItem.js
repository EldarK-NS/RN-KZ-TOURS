import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export default function TourItem({ data }) {
  const navigation = useNavigation();

  const openTour = () => {
    navigation.navigate("Tour", {
      id: data._id,
      title: data.name,
    });
  };
  return (
    <TouchableOpacity onPress={openTour}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{ uri: data.imageCover }}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <View>
            {/* Title */}
            <Text style={styles.title}>{data.name}</Text>
            {/* Desc */}
            <Text style={styles.shortDesc} numberOfLines={2}>
              {data.summary}
            </Text>
          </View>
          {/* Info */}
          <View style={styles.line} />
          <View style={styles.info}>
            <View style={styles.infoContainer}>
              <Ionicons name="location-outline" size={18} color="#5850f2" />
              <Text style={styles.infoText}>
                {data.startLocation.description}
              </Text>
            </View>

            <View style={styles.infoContainer}>
              <MaterialIcons name="date-range" size={18} color="#5850f2" />
              <Text style={styles.infoText}>June 2021</Text>
            </View>

            <View style={styles.infoContainer}>
              <Ionicons name="flag-outline" size={18} color="#5850f2" />
              <Text style={styles.infoText}>{data.locations.length} stops</Text>
            </View>
            <View style={styles.infoContainer}>
              <Ionicons name="ios-person-outline" size={18} color="#5850f2" />
              <Text style={styles.infoText}>{data.maxGroupSize} people</Text>
            </View>
          </View>
          {/* footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>$ {data.price} per person</Text>
            <Text style={styles.footerText}>
              {data.ratingsAverage} rating({data.ratingsQuantity})
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width - 30,
    height: Dimensions.get("screen").height / 3 - 100,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
  },

  img: {
    width: "45%",
    height: "100%",
  },

  content: {
    width: "55%",
  },
  title: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
  },
  shortDesc: {
    fontSize: 12,
    marginHorizontal: 5,
    fontStyle: "italic",
  },
  line: {
    borderWidth: 0.2,
    width: "50%",
    color: "lightgrey",
    alignSelf: "center",
    marginVertical: 3,
  },
  info: {
    flex: 1,
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
  footer: {
    backgroundColor: "#f0efed",
    height: "25%",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  footerText: {
    fontSize: 12,
    fontWeight: "700",
    marginLeft: 10,
  },
});
