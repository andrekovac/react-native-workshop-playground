import React from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Alert
} from "react-native";

export interface ItemT {
  id?: string;
  author: string;
  download_url: string;
}

/**
 * A single image
 */
const Item = ({ author, download_url }: ItemT) => {
  return (
    <View style={styles.item}>
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: download_url }}
      />
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16
  },
});