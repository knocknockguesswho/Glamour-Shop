import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import CheckBox from './CheckBox'

//persist whitelist
/*
submit? submit(function())
*/


export default OrderCard = ({orderNum, orderDate, trackingNum, qty, totalAmt, deliverStatus, submit}) =>{

  const [active, setActive] = useState(false)

  const handleCardPress = () =>{
    if(submit!==undefined){
      submit()
      setActive(!active)
    } else{
      console.log(`variable 'submit' expecting function`)
      setActive(!active)
    }
  }



  return(
    <>
      <TouchableOpacity activeOpacity={.8} style={styles.cardContainer} onPress={handleCardPress}>
        <View style={styles.cardContent}>
          <View style={styles.topSection}>
            <Text style={styles.orderNum}>Order &#x2116;{orderNum}</Text>
            <Text style={styles.orderDate}>{orderDate}</Text>
          </View>
          <View style={styles.mainCard}>
            <View style={styles.trackingNum}>
              <Text style={{color: '#22222275'}}>Tracking Number: </Text>
              <Text style={{fontWeight:'700'}}>{trackingNum}</Text>
            </View>
            <View style={styles.qty}>
              <Text style={{color: '#22222275'}}>Quantity: </Text>
              <Text style={{fontWeight:'700'}}>{qty}</Text>
            </View>
            <View style={styles.totalAmt}>
              <Text style={{color: '#22222275'}}>Total Amount: </Text>
              <Text style={{fontWeight:'700'}}>{totalAmt}</Text>
            </View>
          </View>
          <View style={styles.deliverStatus}>
            <Text style={{color:'#2AA952'}}>{deliverStatus}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  cardContainer:{
    width: width*.9,
    height: width*.4,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 2,
    marginTop: width*.02,
    marginBottom: width*.02,
    marginRight: width*.009,
    marginLeft: width*.009,
    paddingLeft: width*.05,
    paddingRight: width*.05,
  },
  cardContent:{
    height: '100%',
    width: '100%',
  },
  topSection:{
    flex:.70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '5%',
  },
  mainCard:{
    flex: 1.25,
    justifyContent: 'space-around'
  },
  deliverStatus:{
    flex: .30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: '4%'
  },
  orderNum:{
    fontWeight: '700',
    fontSize: width*.04
  },
  orderDate:{
    fontSize: width*.035,
    color: '#22222280'
  },
  trackingNum:{
    flexDirection: 'row'
  },
  qty:{
    flexDirection: 'row'
  },
  totalAmt:{
    flexDirection: 'row'
  }
})
