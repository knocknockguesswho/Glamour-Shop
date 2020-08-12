import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {CardHomeItem} from '../atoms';

const CardHome = (props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {props.products.map((product) => {
        return (
          <CardHomeItem
            key={product.id}
            onPress={() => alert(`${product.id}`)}
            source={product.image}
          />
        );
      })}
    </ScrollView>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', paddingLeft: 18},
});
