import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {CardHomeItem} from '../atoms';

const CardHome = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <CardHomeItem img={require('../../../assets/images/dumy1.png')} />
      <CardHomeItem img={require('../../../assets/images/dumy2.png')} />
      <CardHomeItem img={require('../../../assets/images/dumy1.png')} />
    </ScrollView>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', paddingLeft: 18},
});
