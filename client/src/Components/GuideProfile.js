import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function GuideProfile({ guide }) {
  return (
    <View style={styles.guideProf}>
      <Image
        source={require("../../assets/data/img/users/user-13.jpg")}
        style={styles.image}
      />
      <View style={styles.guideName}>
        <Text style={styles.guideRole}>{guide.role} </Text>
        <Text style={styles.guideName}>{guide.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  guideProf: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  guideRole: {
    fontWeight: "700",
    color: "black",
  },
  guideName: {
    color: "black",
  },
});
