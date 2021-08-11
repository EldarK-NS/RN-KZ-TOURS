import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeTourFromFavorite } from "./../../redux/actions/users";
import { SwipeListView } from "react-native-swipe-list-view";
import moment from "moment";

export default function Favorite() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const favorites = user.user.data.user.favorite;

  const [listData, setListData] = useState(
    favorites.map((item) => ({
      key: item._id,
      title: item.name,
      details: item.summary,
      price: item.price,
    }))
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const deleteRow = (rowMap, rowKey) => {
    dispatch(removeTourFromFavorite(rowKey));
    console.log(rowKey);
  };

  const VisibleItem = (props) => {
    const { data } = props;
    return (
      <View style={styles.rowFront}>
        <TouchableHighlight style={styles.rowFrontVisible}>
          <View>
            <Text style={styles.title} numberOfLines={1}>
              {data.item.title}
            </Text>
            <Text style={styles.details} numberOfLines={1}>
              {data.item.details}
            </Text>
            <Text style={styles.details} numberOfLines={1}>
              Price: ${data.item.price}/person
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  };
  const renderIrem = (data, rowMap) => {
    return <VisibleItem data={data} />;
  };

  const HiddenItemWithActions = (props) => {
    const { onClose, onDelete } = props;
    return (
      <View style={styles.rowBack}>
        <Text>Left</Text>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={onClose}
        >
          <Text>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onDelete}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  if (!user.isAuthenticated) {
    return <Text style={styles.warning}>Please Log In or Register!</Text>;
  }

  return (
    <View>
      <SwipeListView
        data={listData}
        renderItem={renderIrem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    height: 75,
    margin: 5,
    marginBottom: 15,
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    height: 75,
    padding: 10,
    marginBottom: 15,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: "flex-end",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: "#1f65ff",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#666",
  },
  details: {
    fontSize: 12,
    color: "#999",
  },
  warning: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
