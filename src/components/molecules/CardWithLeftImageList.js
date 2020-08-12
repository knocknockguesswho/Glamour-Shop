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
  CardWithLeftImage,
} from '../atoms'


export default CardWithLeftImageList = ({sourceImg, itemName, itemDesign, itemColor, itemSize, itemUnits, itemPrice,}) =>{

  const [content, setContent] = useState({
    itemName,
    itemDesign,
    itemColor,
    itemSize,
    itemUnits,
    itemPrice
  })

  return(
    <>
      <View style={styles.mainContainer}>
        <View style={{alignSelf:'center'}}>
            <CardWithLeftImage
              sourceImg={sourceImg}
              content={content}
            />
        </View>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    width: width,
  }
})