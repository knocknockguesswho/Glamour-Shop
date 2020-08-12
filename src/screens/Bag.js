import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {Image, Icon} from 'react-native-elements';
import {Button} from '../components/atoms';
import {HeaderBackButton, CartBagList} from '../components/molecules';

export class Bag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bags: [
        {
          id: 1,
          image: `https://ae01.alicdn.com/kf/HTB1ClpxqkKWBuNjy1zjq6AOypXa5/Liseaven-Kaos-Pria-Katun-T-Shirt-Penuh-Lengan-Tshirt-Pria-Warna-Solid-Atasan-Kaus-Mandarin-Kerah.jpg_640x640.jpg`,
          product: 'T-Shirt',
          color: 'Gray',
          size: 'L',
          price: 100,
          qty: 1,
        },
        {
          id: 2,
          image: `https://ae01.alicdn.com/kf/HTB1ClpxqkKWBuNjy1zjq6AOypXa5/Liseaven-Kaos-Pria-Katun-T-Shirt-Penuh-Lengan-Tshirt-Pria-Warna-Solid-Atasan-Kaus-Mandarin-Kerah.jpg_640x640.jpg`,
          product: 'Clothes',
          color: 'Black',
          size: 'XL',
          price: 80,
          qty: 1,
        },
        {
          id: 3,
          image: `https://ae01.alicdn.com/kf/HTB1ClpxqkKWBuNjy1zjq6AOypXa5/Liseaven-Kaos-Pria-Katun-T-Shirt-Penuh-Lengan-Tshirt-Pria-Warna-Solid-Atasan-Kaus-Mandarin-Kerah.jpg_640x640.jpg`,
          product: 'Pants',
          color: 'White',
          size: 'M',
          price: 150,
          qty: 1,
        },
      ],
    };
  }

  handleSearch = () => {
    console.log('Search on press');
  };

  handleMinus = (price) => {
    this.setState({
      price: this.state.price - price,
      qty: this.state.qty - 1,
    });
  };

  handlePlus = () => {
    this.setState({
      qty: 3,
    });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderBackButton
          rightComponent={true}
          rightCompName="search"
          backgroundColor="#f9f9f9"
          search={this.handleSearch}
          leftComp={false}
        />
        <Text style={styles.bagTitle}>My Bag</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bagList}>
            {this.state.bags.map((bag) => {
              return (
                <CartBagList
                  key={bag.id}
                  image={bag.image}
                  product={bag.product}
                  color={bag.color}
                  size={bag.size}
                  qty={bag.qty}
                  price={bag.price}
                  minus={this.handleMinus}
                  plus={() => console.log(`ORDER ID = ${bag.id}`)}
                />
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.checkoutContainer}>
          <View style={styles.checkoutContent}>
            <Text style={{color: '#9B9B9B', fontSize: 16}}>Total amount:</Text>
            <Text
              style={{
                color: '#222',
                fontSize: 18,
                fontWeight: '700',
              }}>
              112$
            </Text>
          </View>
          <Button
            title="CHECK OUT"
            type="primary"
            big
            submit={() => console.log('ok')}
          />
        </View>
      </View>
    );
  }
}

export default Bag;

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  mainContainer: {
    height: height,
    width: width,
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
  },
  bagTitle: {
    width: width * 0.9,
    fontWeight: '700',
    letterSpacing: width * 0.002,
    fontSize: 34,
    alignSelf: 'center',
    marginTop: width * 0.03,
    marginBottom: width * 0.02,
  },
  bagList: {
    // marginBottom: width * 0.2,
  },

  // Checkout Start
  checkoutContainer: {
    backgroundColor: '#FFF',
    height: 280,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  checkoutContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});
