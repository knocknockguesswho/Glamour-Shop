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
          image:
            'https://ae01.alicdn.com/kf/HTB1ClpxqkKWBuNjy1zjq6AOypXa5/Liseaven-Kaos-Pria-Katun-T-Shirt-Penuh-Lengan-Tshirt-Pria-Warna-Solid-Atasan-Kaus-Mandarin-Kerah.jpg_640x640.jpg',
          product: 'T-Shirt',
          color: 'Gray',
          size: 'L',
          price: 10,
          total: 10,
          stock: 10,
          qty: 1,
        },
        {
          id: 2,
          image:
            'https://ae01.alicdn.com/kf/HTB1ClpxqkKWBuNjy1zjq6AOypXa5/Liseaven-Kaos-Pria-Katun-T-Shirt-Penuh-Lengan-Tshirt-Pria-Warna-Solid-Atasan-Kaus-Mandarin-Kerah.jpg_640x640.jpg',
          product: 'Clothes',
          color: 'Black',
          size: 'XL',
          price: 10,
          total: 10,
          stock: 10,
          qty: 1,
        },
        {
          id: 3,
          image:
            'https://ae01.alicdn.com/kf/HTB1ClpxqkKWBuNjy1zjq6AOypXa5/Liseaven-Kaos-Pria-Katun-T-Shirt-Penuh-Lengan-Tshirt-Pria-Warna-Solid-Atasan-Kaus-Mandarin-Kerah.jpg_640x640.jpg',
          product: 'Pants',
          color: 'White',
          size: 'M',
          price: 10,
          total: 10,
          stock: 10,
          qty: 1,
        },
      ],
      total: 0,
    };
  }

  handleMinus = (id) => {
    let bags = [...this.state.bags];
    let bag_total = bags[id].total;
    const price = bags[id].price
    if(bags[id].qty>1){
      bag_total-=price;
      bags[id].qty-=1;
      this.setState({
        bags: bags,
        total: this.state.total - price
      })
    }
  };

  handlePlus = (id) => {
    let bags = [...this.state.bags];
    let bag_total = bags[id].total;
    const price = bags[id].price
    if(bags[id].qty<bags[id].stock){
      bag_total+=price;
      bags[id].qty+=1;
      this.setState({
        bags: bags,
        total: this.state.total + price
      })
    }
  };

  componentDidMount(){
    let total = 0;
    for(let i = 0; i < this.state.bags.length; i++){
      total += this.state.bags[i].total
    }
    this.setState({total: total})
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderBackButton
          rightComponent={true}
          rightCompName="search"
          backgroundColor="#f9f9f9"
          rightCompOnPress={() => this.props.navigation.push('Search')}
          leftComp={false}
        />
        <Text style={styles.bagTitle}>My Bag</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bagList}>
            {this.state.bags.map((bag, index) => {
              return (
                <CartBagList
                  key={index}
                  image={bag.image}
                  product={bag.product}
                  color={bag.color}
                  size={bag.size}
                  qty={bag.qty}
                  price={bag.price}
                  minus={()=>this.handleMinus(index)}
                  plus={
                   ()=>this.handlePlus(index)
                  }
                />
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.checkoutContainer}>
          <View style={styles.checkoutContent}>
            <Text style={styles.amount_total}>Total amount:</Text>
            <Text style={styles.amount}>{`${this.state.total}$`}</Text>
          </View>
          <Button
            title="CHECK OUT"
            type="primary"
            big
            submit={
              () => {
                this.props.navigation.replace('Payment', {
                  url:
                    'https://app.sandbox.midtrans.com/snap/v2/vtweb/0bc83f1b-555f-4b06-b33e-f32493ca3e36',
                });
              }
              // console.log(
              //   'https://app.sandbox.midtrans.com/snap/v2/vtweb/0bc83f1b-555f-4b06-b33e-f32493ca3e36',
              // )
            }
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
  amount: {
    color: '#222',
    fontSize: 18,
    fontWeight: '700',
  },
  amount_total: {color: '#9B9B9B', fontSize: 16},
});
