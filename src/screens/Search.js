import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SearchBar, Button} from '../components/atoms';
import {HeaderBackButton} from '../components/molecules';

const Search = () => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapper}>
        <HeaderBackButton />
        <SearchBar />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Popular search</Text>
      </View>
      <View style={styles.outline}>
        <Button type="outline" title="work shoes" />
        <Button type="outline" title="swimsuit" />
      </View>
      <View style={styles.outline}>
        <Button type="outline" title="swimsuit    " />
        <Button type="outline" title="work shoes" />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  page: {backgroundColor: '#E5E5E5', flex: 1},
  wrapper: {flexDirection: 'row'},
  container: {padding: 15},
  text: {fontSize: 16, fontWeight: '600'},
  outline: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
