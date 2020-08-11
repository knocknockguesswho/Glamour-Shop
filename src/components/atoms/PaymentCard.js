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


export default PaymentCard = ({paymentImgSrc}) =>{



  const [active, setActive] = useState(false)

  const handleEdit = () =>{
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
      <View style={styles.cardContainer}>
        {paymentImgSrc}
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  cardContainer:{
    width: width*.15,
    height: width*.1,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 1,
    overflow: 'hidden',
    alignItems: 'center'
  }
})
