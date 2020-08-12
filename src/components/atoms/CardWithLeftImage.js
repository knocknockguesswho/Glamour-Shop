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
  OrderDetailsContent,
  ShopCardContent
} from '../molecules'

export default CardWithLeftImage = ({sourceImg, content, type, submit}) =>{

  return(
    <>
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View style={styles.contentImg}>
            {sourceImg}
          </View>
          <View style={styles.mainContent}>
            {type==='order-details'?
              <OrderDetailsContent 
                content={content}
              /> :
            type==='filter-list'?
              <ShopCardContent
                content={content}
              /> :
             <Text></Text>
            }
          </View>
        </View>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  cardContainer:{
    width: width*.9,
    height: width*.3,
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: width*.02,
    marginBottom: width*.02,
    elevation: 2,
    overflow: 'hidden'
  },
  cardContent:{
    height: '100%',
    width: '100%',
    flexDirection: 'row'
  },
  contentImg:{
    flex: .3,
  },
  mainContent:{
    flex: .7,
    paddingVertical: width*.03,
    paddingHorizontal: width*.03,
    justifyContent: 'space-around'
  }
})
