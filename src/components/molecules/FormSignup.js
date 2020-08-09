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
  
} from '../atoms';

export default FormSignup = () =>{

  const [formSignup, setForm] = useState([
    {
      placeholder: 'Name',
      value: '',
      type: 'none',
      secure: false
    },
    {
      placeholder: 'Email',
      value: '',
      type: 'emailAddress',
      secure: false
    },
    {
      placeholder: 'Password',
      value: '',
      type: 'password',
      secure: true
    }
  ])

  return(
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.formTitle}>Sign Up</Text>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    height: height/1.15,
    width: width*.95,
    position: 'absolute',
    bottom: 0,
    left: width*.025,
    right: width*.025
  },
  formTitle:{
    fontWeight: 'bold',
    fontSize: 34,
    color: 'black'
  }
})