import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';


import {
  CardWithLeftImageList,
  HeaderBackButton,
  OrderInformation,
} from '../components/molecules';

import {
  Button
} from '../components/atoms';

class OrderDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      order:{
        orderNum: this.props.route.params.orderNum,
        orderDate: this.props.route.params.orderDate,
        trackingNum: this.props.route.params.trackingNum,
        deliverStatus: this.props.route.params.deliverStatus,
      },
      orderInformation:{
        shippingAddress: '3 Newbridge Court ,Chino Hills, CA 91709, United States',
        paymentMethod: 'Pos Indonesia',
        cardNumber: '3947 3947 3947 3947',
        deliveryMethod: 'FedEx, 3 Days, 15$',
        discount: '10%, Personal promo code',
        totalAmt: 133
      },
      items:[
        {
          name: 'Pullover',
          design: 'Mango',
          color: 'Gray',
          size: 'L',
          units: 1,
          price: 51,
          image: <Image source={require('../../assets/images/dumy1.png')} style={{flex: 1, width: null, height: null, resizeMode: 'cover'}} />,
        },
        {
          name: 'Pullover',
          design: 'Mango',
          color: 'Gray',
          size: 'L',
          units: 1,
          price: 51,
          image: <Image source={require('../../assets/images/dumy1.png')} style={{flex: 1, width: null, height: null, resizeMode: 'cover'}} />,
        },
        {
          name: 'Pullover',
          design: 'Mango',
          color: 'Gray',
          size: 'L',
          units: 1,
          price: 51,
          image: <Image source={require('../../assets/images/dumy1.png')} style={{flex: 1, width: null, height: null, resizeMode: 'cover'}} />,
        },
      ],
    }
  }

  handleBackButton = () =>{
    this.props.navigation.goBack();
  }


  render() {

    const orderInfo = this.state.orderInformation

    return (
      <>
      <HeaderBackButton submit={this.handleBackButton} middleComponent={true} midCompTitle='Order Details' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.orderNumContainer}>
            <View style={{width: width*.9, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: width*.02}}>
              <Text style={{color: '#222222', fontWeight: '700'}}>Order &#x2116;{this.state.order.orderNum}</Text>
              <Text style={{color: '#22222295'}}>{this.state.order.orderDate}</Text>
            </View>
            <View style={{width: width*.9, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: width*.02}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#22222295'}}>Tracking number: </Text>
                <Text style={{color: '#222222', fontWeight: '700'}}>{this.state.order.trackingNum}</Text>
              </View>
              <Text style={{color: '#2AA952'}}>{this.state.order.deliverStatus}</Text>
            </View>
          </View>
          <View style={styles.cardItems}>
            <Text style={{fontWeight: '700'}}>{this.state.items.length} Items</Text>
            <View style={styles.cardsContainer}>
              {this.state.items.map((item, index)=>{
                return(
                  <CardWithLeftImageList
                    sourceImg={item.image}
                    itemName={item.name}
                    itemColor={item.color}
                    itemDesign={item.design}
                    itemPrice={item.price}
                    itemSize={item.size}
                    itemUnits={item.units}
                  />
                )
              })}
            </View>
          </View>
          <View style={styles.orderInformation}>
            <OrderInformation 
              shippingAddress={orderInfo.shippingAddress}
              paymentMethod={orderInfo.paymentMethod}
              cardNumber={orderInfo.cardNumber}
              deliveryMethod={orderInfo.deliveryMethod}
              discount={orderInfo.discount}
              totalAmt={orderInfo.totalAmt}
            />
            <View style={styles.buttonContainer}>
              <Button title='Reorder' type='outline'  />
              <Button title='Leave Feedback' type='primary' />
            </View>
          </View>
        </View>
      </ScrollView>
      </>
    )
  }
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    height: height*1.1,
    width: width,
    alignSelf: 'center',
    paddingHorizontal: width*.05
  },
  orderNumContainer:{
    marginBottom: width*.04,
    marginTop: width*.04
  },
  cardItems:{
    alignSelf: 'center',
    width: '100%'
  },
  cardsContainer:{
    marginTop: width*.02,
    alignSelf: 'center'
  },
  orderInformation:{
    marginTop: width*.04,
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: width*.1
  }
})

export default OrderDetails;
