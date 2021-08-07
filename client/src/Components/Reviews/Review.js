import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import moment from "moment";

export default function Review({ data }) {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.author}>
        <View style={styles.authorProfile}>
          <Image
            source={require("../../../assets/data/img/users/user-15.jpg")}
            resizeMode="cover"
            style={styles.image}
          />
          <Text style={styles.name}>{data.user.name}</Text>
        </View>
        <Text style={styles.date}>{moment(data.createdAt).format("L")}</Text>
      </View>
      <Text style={styles.review}>{data.review}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewContainer: {
    marginBottom: 10,
    backgroundColor: "gainsboro",
    width: "100%",
    borderRadius: 20,
  },
  author: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  authorProfile: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  date: {
    fontSize: 12,
    marginRight: 20,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 20,
  },
  name: {
    marginLeft: 15,
  },
  review: {
    marginLeft: 15,
  },
});
