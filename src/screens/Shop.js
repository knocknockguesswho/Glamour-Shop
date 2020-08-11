import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderBackButton} from '../components/molecules';
import {Filter, GridView, LowestToHigh} from '../components/atoms';

const Shop = () => {
  return (
    <View style={styles.page}>
      <HeaderBackButton rightComponent={true} rightComponent="search" />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Women's tops</Text>
      </View>
      <View style={styles.wrapperFill}>
        <Filter />
        <LowestToHigh />
        <GridView />
      </View>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  page: {flex: 1},
  wrapper: {backgroundColor: 'white', paddingHorizontal: 15},
  title: {fontSize: 34, fontWeight: 'bold'},
  wrapperFill: {
    backgroundColor: 'white',
    paddingHorizontal: 22,
    paddingVertical: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
