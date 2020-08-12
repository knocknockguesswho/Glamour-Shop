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


import {
  Star
} from '../atoms'


export default ShopCardContent = ({content}) =>{

  return(
    <>
      <View>
        <Text style={{fontWeight: '700', fontSize: width*.04}}>{content.itemName}</Text>
        <Text style={{fontSize: width*.03, color: '#22222280'}}>{content.itemDesign}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <Star 
          rating={content.itemRating}
        />
      </View>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: '700'}}>{content.itemPrice}$</Text>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({

})
