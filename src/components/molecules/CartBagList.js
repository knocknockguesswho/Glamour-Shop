import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Image, Icon} from 'react-native-elements';

const CartBagList = ({
  image,
  product,
  color,
  size,
  price,
  minus,
  plus,
  qty,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Image source={{uri: image}} style={{width: 120, height: 150}} />
      </View>
      <View style={styles.productDetails}>
        <View style={styles.topContent}>
          <Text style={styles.productTitle}>
            {product.length > 18 ? `${product.substr(0, 19)}...` : product}
          </Text>
          <Icon
            type="font-awesome"
            name="ellipsis-v"
            size={18}
            color="#222"
            onPress={() => console.log('Button Menu Delete')}
          />
        </View>
        <View style={styles.middleContent}>
          <Text style={{fontSize: 12, color: '#9B9B9B'}}>
            Color: <Text style={{color: '#222'}}>{color}</Text>
          </Text>
          <Text style={{fontSize: 12, color: '#9B9B9B', marginLeft: 10}}>
            Size: <Text style={{color: '#222'}}>{size}</Text>
          </Text>
        </View>
        <View style={styles.bottomContent}>
          <View style={styles.quantity}>
            <Icon
              raised
              size={16}
              type="font-awesome"
              name="minus"
              color="#9B9B9B"
              onPress={minus}
            />
            <Text style={{fontSize: 16, paddingHorizontal: 8, color: '#222'}}>
              {qty}
            </Text>
            <Icon
              raised
              size={16}
              type="font-awesome"
              name="plus"
              color="#9B9B9B"
              onPress={plus}
            />
          </View>
          <View style={styles.priceQuantity}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 16,
              }}>{`${price}$`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartBagList;

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  // Card start
  cardContainer: {
    flexDirection: 'row',
    overflow: 'hidden',
    width: width * 0.9,
    height: width * 0.35,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 2,
    marginTop: width * 0.02,
    marginBottom: width * 0.024,
    marginRight: width * 0.009,
    marginLeft: width * 0.009,
    paddingRight: width * 0.05,
    alignSelf: 'center',
  },
  productDetails: {
    padding: 10,
    width: '67%',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  topContent: {
    // width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleContent: {
    flexDirection: 'row',
  },
  bottomContent: {
    // width: '72%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceQuantity: {},
  // Card End
});
