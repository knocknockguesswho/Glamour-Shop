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
  },
  image: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    borderRadius: 10,
    flex: 1,
  },
});
