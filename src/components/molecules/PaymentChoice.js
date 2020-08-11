import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';

import {
  PaymentCard,
  ButtonRounded
} from '../atoms';

export default PaymentChoice = ({paymentName, paymentImgSrc, choose}) =>{

  const [choice, setChoice] = useState(choose)

  const handleChoicePayment = () =>{
    setChoice(!choice)
  }

  return(
    <>
      <View style={styles.mainContainer}>
        <View style={styles.paymentList}>
          <View style={styles.cardContainer}>
            <PaymentCard 
              paymentImgSrc={paymentImgSrc}
            />
          </View>
          <View style={styles.paymentName}>
            <Text>{paymentName}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonRounded name='roundedColor' color='#DB3022' submit={handleChoicePayment} choose={choice}/>
          </View>
        </View>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    width: width*.9,
    alignSelf: 'center',
    marginBottom: width*.04
  },
  paymentList:{
    flexDirection: 'row'
  },
  cardContainer:{
    width: '20%',
    justifyContent: 'flex-start',
    alignItems:'center'
  },
  paymentName:{
    width: '60%',
    justifyContent: 'center',
    marginLeft: width*.04
  },
  buttonContainer:{
    width: '20%',
    justifyContent: 'center',
    alignItems:'center'
  }
})