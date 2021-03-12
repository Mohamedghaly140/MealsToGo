import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

import RestaurantInfo from '../components/RestaurantInfo';

const Restaurant = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});
