import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Image
} from 'react-native';

//persist whitelist
/*
submit? submit(function())
*/


export default OrderDetailsContent = ({content}) =>{

  return(
    <>
      <View>
        <Text style={{fontWeight: '700', fontSize: width*.04}}>{content.itemName}</Text>
        <Text style={{fontSize: width*.03, color: '#22222280'}}>{content.itemDesign}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: width*.03, color: '#22222280'}}>Color: </Text>
          <Text style={{fontWeight: '700', marginRight: width*.02}}>{content.itemColor}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: width*.03, color: '#22222280'}}>Size: </Text>
          <Text style={{fontWeight: '700'}}>{content.itemSize}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: width*.03, color: '#22222280'}}>Units: </Text>
          <Text style={{fontWeight: '700'}}>{content.itemUnits}</Text>
        </View>
        <Text style={{fontWeight: '700'}}>{content.itemPrice}$</Text>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({

})
