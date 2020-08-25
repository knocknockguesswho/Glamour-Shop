  import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView
} from 'react-native';

import {
  HeaderBackButton,
  OrderCardList
} from '../components/molecules';

import {
  Button
} from '../components/atoms'

class MyOrders extends Component {
  constructor(){
    super();
    this.state = {
      cardList: [
        {
          orderNum: 1947034,
          trackingNum: 'IW3475453455',
          qty: 3,
          totalAmt: 112, //USD$
          orderDate: '05-12-2019',
          deliverStatus: 'Delivered',
          submit: ()=> console.log('Pressed') 
        },
        {
          orderNum: 1947034,
          trackingNum: 'IW3475453455',
          qty: 3,
          totalAmt: 112, //USD$
          orderDate: '05-12-2019',
          deliverStatus: 'Delivered',
          submit: ()=> console.log('Pressed') 
        },
        {
          orderNum: 1947034,
          trackingNum: 'IW3475453455',
          qty: 3,
          totalAmt: 112, //USD$
          orderDate: '05-12-2019',
          deliverStatus: 'Delivered',
          submit: ()=> console.log('Pressed') 
        },
        {
          orderNum: 1947034,
          trackingNum: 'IW3475453455',
          qty: 3,
          totalAmt: 112, //USD$
          orderDate: '05-12-2019',
          deliverStatus: 'Delivered',
          submit: ()=> console.log('Pressed') 
        },
      ]
    }
  }

  handleSignup = () =>{
    console.log('Thanks for register')
  }

  handleBackButton = () =>{
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderBackButton 
          submit={this.handleBackButton} 
          rightComponent={true} 
          rightCompName='search' 
          rightCompOnPress={() => this.props.navigation.push('Search')}
          backgroundColor='#F9F9F9' 
        />
        <Text style={styles.title}>
          My Orders
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cardList}>
            <OrderCardList 
              listData={this.state.cardList} 
              navigation={this.props.navigation}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    height: height,
    width: width,
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
  },
  title:{
    width: width*.9,
    fontWeight: '700',
    letterSpacing: width*.002,
    fontSize: 34,
    alignSelf: 'center',
    marginTop: width*.03,
    marginBottom: width*.02
  },
  cardList:{
    marginBottom: width*.5,
  },
})

export default MyOrders;