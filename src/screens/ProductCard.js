import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {CoverProduct} from '../../assets/images';
import {HeaderBackButton} from '../components/molecules';
import {Button} from '../components/atoms';
import {connect} from 'react-redux';
import {config} from '../config/baseUrl';

const ProductCard = ({navigation, route, products}) => {
  const [product, setProduct] = useState('');
  const handleBack = () => {
    navigation.goBack();
  };

  const getProduct = (id) => {
    const data = products.data;
    const detail = data.filter((e) => {
      return e.id === id;
    });

    setProduct(detail[0]);
  };

  useEffect(() => {
    getProduct(route.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);
  return (
    <View style={styles.page}>
      <HeaderBackButton
        midCompTitle="Short dress"
        middleComponent={true}
        submit={() => handleBack()}
      />
      <ImageBackground
        source={{uri: `${config.url}/images/products/${product.image}`}}
        style={styles.background}
      />
      <View style={styles.content}>
        <View style={styles.contentText}>
          <View>
            <Text style={styles.brand}>{product.products}</Text>
            <Text style={styles.type}>{product.category}</Text>
          </View>
          <Text style={styles.price}>${product.price}</Text>
        </View>
        <View style={styles.contentDesc}>
          <Text style={styles.desc}>{product.description}</Text>
        </View>
        <View style={styles.button}>
          <Button type="primary" title="ADD TO CART" big />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});
export default connect(mapStateToProps)(ProductCard);

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
