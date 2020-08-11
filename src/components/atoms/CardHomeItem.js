import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Label from './Label';

const CardHomeItem = (props) => {
  return (
    <View style={{marginRight: 16}}>
      <View style={styles.container}>
        <Label />
        <Image style={styles.image} source={props.img} />
      </View>
    </View>
  );
};

export default CardHomeItem;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 218,
    borderRadius: 10,
    backgroundColor: 'pink',
  },
  image: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    borderRadius: 10,
    flex: 1,
  },
});
