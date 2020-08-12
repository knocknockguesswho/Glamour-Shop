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
  HeaderBackButton,
} from '../components/molecules';

import {
  Button,
  SearchBar
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
      }
    }
  }

  handleBackButton = () =>{
    this.props.navigation.goBack();
  }


  render() {
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
            <Text>3 Items</Text>
            <View style={styles.cardsContainer}>

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
  cardItems:{
    width: width*.9,
    alignSelf: 'center'
  },
  cardsContainer:{
    height: width*.6,
    backgroundColor: 'yellow',
    marginTop: width*.02
  }
})

export default OrderDetails;
