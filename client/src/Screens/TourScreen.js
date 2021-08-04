import React from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import Banner from "../Components/Banner";
import TourDescription from "../Components/TourDescription";
import { useNavigation } from "@react-navigation/core";

const TourScreen = () => {
  const navigation = useNavigation();

  const goToMap = () => {
    navigation.navigate("Map");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Banner />
        <TourDescription />
        <Pressable style={styles.button} onPress={goToMap}>
          <Text>Tour Map & Reviews</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default TourScreen;

const styles = StyleSheet.create({
  container: {
    //  justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 180,
    height: 35,
    borderRadius: 20,
    backgroundColor: "gainsboro",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
});
