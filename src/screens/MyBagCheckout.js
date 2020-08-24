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

import Mastercard from '../../assets/images/mastercard.png'

import {
  AddressList,
  HeaderBackButton,
  PaymentChoice
} from '../components/molecules';

import {
  Button,
  SearchBar
} from '../components/atoms';

class ShippingAddress extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
      addresses: [
        {
          name:'Jane Doe',
          address:'3 Newbridge Court Chino Hills, CA 91709, United States'
        },
      ],
      paymentList: [
        {
          paymentName: 'Mastercard',
          paymentImgSrc: <Image source={require('../../assets/images/mastercard.png')} style={{width: width*.1, height: width*.1, resizeMode: 'center'}} />,
          choose: false
        },
        {
          paymentName: 'Pos Indonesia',
          paymentImgSrc: <Image source={require('../../assets/images/posindonesia.png')} style={{width: width*.1, height: width*.1, resizeMode: 'center'}} />,
          choose: false
        },
        {
          paymentName: 'Go Pay',
          paymentImgSrc: <Image source={require('../../assets/images/gopay.png')} style={{width: width*.1, height: width*.1, resizeMode: 'center'}} />,
          choose: false
        },
      ]
    }
  }

  handleBackButton = () =>{
    this.props.navigation.goBack();
  }

  handleGoToChangeAddress = () =>{
    this.props.navigation.push('ChangeAddress')
  }

  handleSubmitOrder = () =>{
    console.log('Pressed')
  }


  render() {
    return (
      <>
      <HeaderBackButton submit={this.handleBackButton} middleComponent={true} midCompTitle='Checkout' />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <View style={styles.addressList}>
          <AddressList 
          title='Shipping Address' 
          addresses={this.state.addresses}
          submit={this.handleGoToChangeAddress}
          />
        </View>
        <View style={{marginTop: width*.05}}>
          <Text style={{fontSize: width*.04, fontWeight: '700', width: width*.9, alignSelf: 'center'}}>
            Payment
          </Text>
        </View>
        <View style={styles.paymentContainer}>
          {this.state.paymentList.map((data, index)=>{
            return(
              <PaymentChoice
                paymentName={data.paymentName}
                paymentImgSrc={data.paymentImgSrc}
                choose={data.choose}
              />
            )
          })}
        </View>
        <View style={styles.checkoutSummary}>
          <View style={styles.summaryContainer}>
            <View style={styles.summaryContent}>
              <Text style={styles.priceTitle}>Order:</Text>
              <Text style={styles.amount}>112$</Text>
            </View>
            <View style={styles.summaryContent}>
              <Text style={styles.priceTitle}>Delivery:</Text>
              <Text style={styles.amount}>15$</Text>
            </View>
            <View style={styles.summaryContent}>
              <Text style={{fontSize: width*.04, fontWeight: '700', color: '#22222290'}}>Summary:</Text>
              <Text style={{fontSize: width*.04, fontWeight: '700'}}>127$</Text>
            </View>
          </View>
          <View style={{marginTop: '10%'}}>
            <Button 
              title='SUBMIT ORDER'
              type='primary'
              big={true}
              submit={this.handleSubmitOrder}
            />
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
    height: height,
    width: width,
    alignSelf: 'center'
  },
  addressList:{
    marginBottom: width*.04,
    marginTop: width*.04
  },
  paymentContainer:{
    width: width,
    marginTop: width*.04,
    marginBottom: width*.2
  },
  checkoutSummary:{
    width: width,
    height: width*.8,
    backgroundColor: 'white',
    borderTopLeftRadius: width*.05,
    borderTopRightRadius: width*.05,
    paddingTop: width*.05
  },
  summaryContainer:{
    width: width*.9,
    height: width*.3,
    justifyContent: 'space-around',
    alignSelf: 'center'
  },
  summaryContent:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceTitle:{
    fontSize: width*.035,
    color: '#22222290'
  },
  amount:{
    fontSize: width*.035,
    fontWeight: '700'
  }
})

export default ShippingAddress;
