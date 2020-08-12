import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';

import {
  OrderCard
} from '../atoms';

export default OrderCardList = ({listData, submit}) =>{

  return(
    <>
      <View style={styles.mainContainer}>
        <View style={{alignSelf: 'center'}}>
          {listData.map((data, index)=>{
            return(
              <OrderCard
                key={index}
                orderNum={data.orderNum}
                orderDate={data.orderDate}
                trackingNum={data.trackingNum}
                qty={data.qty}
                deliverStatus={data.deliverStatus}
                totalAmt={data.totalAmt}
                submit={submit}
              />
            )
          })}
        </View>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    width: width*.95,
    alignSelf: 'center'
  }
})