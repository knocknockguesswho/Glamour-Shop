import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Label = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NEW</Text>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 24,
    backgroundColor: 'black',
    borderRadius: 29,
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
    padding: 5,
    color: 'white',
  },
});
