import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Label from './Label';

const CardHomeItem = (props) => {
  return (
    <View style={{marginRight: 16}}>
      <View style={styles.container}>
      <View style={styles.label}>
        <Label />
      </View>
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
    paddingTop: 10,
    paddingLeft: 5
  },
  image: {
    width: null,
    height: null,
    resizeMode: 'cover',
    borderRadius: 10,
    flex: 1,
    marginTop: -36,
    marginLeft: -5
  },
  label:{
    zIndex: 1,
    paddingLeft: 5,
  }
});
