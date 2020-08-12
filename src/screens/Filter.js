import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderBackButton} from '../components/molecules';
import {Button, Gap} from '../components/atoms';

const Filter = () => {
  return (
    <View style={styles.page}>
      <HeaderBackButton />
      <View style={styles.container}>
        <Text style={styles.title}>Colors</Text>
      </View>
      <View style={styles.box}></View>

      <View style={styles.container}>
        <Text style={styles.title}>Sizes</Text>
      </View>
      <View style={styles.box}></View>

      <View style={styles.container}>
        <Text style={styles.title}>Category</Text>
      </View>
      <View style={styles.box}></View>

      <Gap height={180} />
      <View style={styles.button}>
        <Button type="outline" title="Discard" />
        <Button type="primary" title="Apply" />
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  page: {backgroundColor: '#F9F9F9', flex: 1},
  container: {padding: 15},
  title: {fontSize: 16, fontWeight: 'bold'},
  box: {backgroundColor: 'pink', height: 100},
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    flex: 1,
  },
});
