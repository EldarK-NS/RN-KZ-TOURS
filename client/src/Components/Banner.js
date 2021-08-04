import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper/src";

const { width } = Dimensions.get("window");

export default function Banner() {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://www.dmarge.com/wp-content/uploads/2021/04/Baglioni-Resort-Maldives.jpg",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/f4/c0/42.jpg",
      "https://www.yucatan-holidays.com/yh2016/wp-content/uploads/2010/11/aztecdancer.jpg",
      "https://www.offthevine.it/wp-content/uploads/2016/08/wine-tour.jpg",
      "https://guardian.ng/wp-content/uploads/2020/07/Vinicunca-monta%C3%B1a-de-colores.-Photo-Private-Peru-Tours-1.jpg",
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            showButton={false}
            autoplay={true}
            autoplayTimeout={4}
            style={{ height: width / 2 }}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
        </View>
        <View style={{ height: 10 }}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    height: width / 2,
    width: width - 30,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
