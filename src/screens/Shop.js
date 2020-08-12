import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {HeaderBackButton} from '../components/molecules';
import {Filter, GridView, LowestToHigh} from '../components/atoms';

const Shop = () => {
  return (
    <View style={styles.page}>
      <HeaderBackButton rightComponent={true} rightCompName="search" />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Women's tops</Text>
      </View>
      <View style={styles.filterContainer}>
        <View style={styles.wrapperFill}>
          <Filter />
          <LowestToHigh />
          <GridView />
        </View>
      </View>
    </View>
  );
};

export default Shop;

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  page: {flex: 1},
  wrapper: {backgroundColor: 'white', paddingHorizontal: 15},
  title: {fontSize: 34, fontWeight: 'bold'},
  wrapperFill: {
    backgroundColor: '#F9F9F9',
    marginHorizontal: 22,
    marginVertical: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterContainer:{
    width: width,
    height: width*.15,
    backgroundColor: 'white'
  }
});
