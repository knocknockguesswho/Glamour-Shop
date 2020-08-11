import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Card1} from '../../../assets/images';

const CardHome = () => {
  return (
    <View>
      <Image source={Card1} styles={styles.image} />
    </View>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  image: {width: 156, height: 215},
});
