import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Label from './Label';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {config} from '../../config/baseUrl';

const CardHomeItem = ({onPress, source}) => {
  return (
    <TouchableOpacity style={{marginRight: 16}} onPress={onPress}>
      <View style={styles.container}>
        {/* <Label /> */}
        <Image
          style={styles.image}
          source={{uri: `${config.url}/images/products/${source}`}}
        />
      </View>
    </TouchableOpacity>
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
    paddingLeft: 5,
  },
  image: {
    width: null,
    height: null,
    resizeMode: 'cover',
    borderRadius: 10,
    flex: 1,
    marginTop: -36,
    marginLeft: -5,
  },
  label: {
    zIndex: 1,
    paddingLeft: 5,
  },
});
