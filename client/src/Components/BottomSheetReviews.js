import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import Review from "./Reviews/Review";
import {
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "@gorhom/bottom-sheet";

const BottomSheetReviews = ({ data }) => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  // renders
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Text style={styles.title}>REVIEWS</Text>
        <TouchableOpacity onPress={handlePresentModalPress}>
          <Review data={data[0]} />
        </TouchableOpacity>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
        >
          <View style={styles.contentContainer}>
            <FlatList
              data={data}
              renderItem={(item) => <Review data={item.item} />}
            />
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 5,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default BottomSheetReviews;
