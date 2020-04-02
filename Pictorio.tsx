import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';

interface ItemType {
  id?: string;
  author: string;
  download_url: string;
}

/**
 * Ein einzelnes Bild
 */
const Item = ({ author, download_url }: ItemType) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        Alert.alert(
          'Author',
          author,
          [
            {text: 'OK'},
          ],
          {cancelable: false},
        );
      }}
    >
      <Image
          style={{width: 300, height: 300}}
          source={{uri: download_url}}
        />
    </TouchableOpacity>
  );
}

const Pictorio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1&limit=100')
      .then(response => response.json())
      .then(data => setData(data));
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Photos</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item author={item.author} download_url={item.download_url} />}
        keyExtractor={(item: ItemType) => item?.id}
      />
    </View>
  );
}

export default Pictorio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
  },
  header: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
