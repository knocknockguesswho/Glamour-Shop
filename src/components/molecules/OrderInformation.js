import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

import Test from '../../../assets/images/mastercard.png'


export default OrderInformation = ({shippingAddress, paymentMethod, cardNumber, deliveryMethod, discount, totalAmt}) =>{

  const [paymentCard, setPaymentCard] = useState({
    cardImg: <Image />
  })

  const handlePaymentImage = () =>{
    switch (paymentMethod) {
      case 'Mastercard':
        return (
          setPaymentCard({
            ...paymentCard, 
            cardImg: <Image 
                        source={require('../../../assets/images/mastercard.png')}
                        style={{flex: .5, width: null, height: null, resizeMode: 'center'}}
                      />
          })
        )
      case 'Pos Indonesia':
        return (
          setPaymentCard({
            ...paymentCard, 
            cardImg: <Image 
                        source={require('../../../assets/images/posindonesia.png')}
                        style={{flex: .5, width: null, height: null, resizeMode: 'center'}}
                      />
          })
        )
      case 'Gopay':
        setPaymentCard({
          ...paymentCard, 
          cardImg: <Image 
                      source={require('../../../assets/images/gopay.png')}
                      style={{flex: .5, width: null, height: null, resizeMode: 'center'}}
                    />
        })
      default:
        return (
          setPaymentCard({
            ...paymentCard, 
            cardImg: <Image 
                        source={require('../../../assets/images/mastercard.png')}
                        style={{flex: .5, width: null, height: null, resizeMode: 'center'}}
                      />
          })
      )
    }
  }

  useEffect(()=>{
    handlePaymentImage()
  }, [])


  return(
    <>
      <View style={styles.mainContainer}>
        <Text style={{fontWeight: '700', marginBottom: width*.02}}>Order Information</Text>

          <View style={styles.infoList}>
            <Text style={styles.infoTitle}>Shipping Address: </Text>
            <Text style={styles.infoContent}>{shippingAddress}</Text>
          </View>
          <View style={styles.infoList}>
            <Text style={styles.infoTitle}>Payment Method: </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.paymentCardContainer}>
                {paymentCard.cardImg}
              </View>
              <Text style={styles.infoContent}>{cardNumber}</Text>
            </View>
          </View>
          <View style={styles.infoList}>
            <Text style={styles.infoTitle}>Delivery Method: </Text>
            <Text style={styles.infoContent}>{deliveryMethod}</Text>
          </View>
          <View style={styles.infoList}>
            <Text style={styles.infoTitle}>Discount: </Text>
            <Text style={styles.infoContent}>{discount}</Text>
          </View>
          <View style={styles.infoList}>
            <Text style={styles.infoTitle}>Total Amount: </Text>
            <Text style={styles.infoContent}>{totalAmt}</Text>
          </View>

      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    width: width*.8
  },
  infoList:{
    flexDirection: 'row',
    marginVertical: width*.02,
  },
  infoListWithImage:{
    flexDirection: 'row',
    marginVertical: width*.02,
    alignItems: 'center'
  },
  infoTitle:{
    color: '#22222290',
    letterSpacing: width*.001,
    marginRight: width*.01
  },
  infoContent:{
    fontWeight: '700',
    width: width*.65,
    letterSpacing: width*.001
  },
  paymentCardContainer:{
    width: width*.11,
    height: width*.09,
    // alignItems: 'center'
  }
})

