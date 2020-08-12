import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {CoverProduct} from '../../assets/images';

const ProductCard = () => {
  handleBackButton = () => {
    this.props.navigation.goBack();
  };
  return (
    <View style={styles.page}>
      <HeaderBackButton
        midCompTitle="Short dress"
        middleComponent={true}
        submit={handleBackButton}
      />
      <ImageBackground
        source={CoverProduct}
        style={styles.background}></ImageBackground>
      <View style={styles.content}>
        <View style={styles.contentText}>
          <View>
            <Text style={styles.brand}>H&M</Text>
            <Text style={styles.type}>Short black dress</Text>
          </View>
          <Text style={styles.price}>$19.99</Text>
        </View>
        <View style={styles.contentDesc}>
          <Text style={styles.desc}>
            Short dress in soft cotton jersey with decorative buttons down the
            front and a wide, frill-trimmed square neckline with concealed
            elastication. Elasticated seam under the bust and short puff sleeves
            with a small frill trim.
          </Text>
        </View>
        <View style={styles.button}>
          <Button type="primary" title="ADD TO CART" big />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  page: {backgroundColor: '#F9F9F9', flex: 1},
  background: {height: 336, paddingTop: 30},
  content: {
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
  contentText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    marginTop: 10,
  },
  brand: {fontSize: 24, fontWeight: 'bold', color: '#222222'},
  type: {fontSize: 11, color: '#9B9B9B'},
  price: {fontSize: 24, fontWeight: 'bold', color: '#DB3022', marginTop: 15},
  contentDesc: {padding: 15},
  desc: {fontSize: 15},
  button: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    flex: 1,
  },
});
