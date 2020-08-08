import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default TextFieldMedium = () =>{
  return(
    <>
      <View style={styles.formGroup}>
        
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  formGroup:{
    width: width*.9,
    height: width*.2,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  inputBar:{

  }
})