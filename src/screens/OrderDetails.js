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
  HeaderBackButton,
} from '../components/molecules';

import {
  Button,
  SearchBar
} from '../components/atoms';

class OrderDetails extends Component {
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
      <HeaderBackButton submit={this.handleBackButton} middleComponent={true} midCompTitle='Order Details' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.orderNumContainer}>
            <View style={{width: width*.9, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text></Text>
              <Text></Text>
            </View>
            <View style={{width: width*.9, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text></Text>
              <Text></Text>
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
  orderNumContainer:{
    marginBottom: width*.04,
    marginTop: width*.04
  },
})

export default OrderDetails;
