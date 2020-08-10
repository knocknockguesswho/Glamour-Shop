import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  
} from '../atoms';

export default HeaderBackButton = ({submit}) =>{

  handleBackButton = () =>{
    submit()
  }

  return(
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={handleBackButton}>
          <Icon 
            name='chevron-left'
            size={25}
            color='#222'
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer:{
    height: height/1.15,
    width: width*.95,
    paddingTop: width*.05,
    alignSelf: 'center'
  }
})