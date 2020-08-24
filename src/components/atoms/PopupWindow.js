import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

//persist whitelist
/*
topTitle? 'BUTTON_TITLE'
bottomTitle? 'BUTTON_TITLE'
submit? submit(function(console.log('Pressed')))
*/

export default PopupWindow = ({topTitle, bottomTitle, submit}) =>{

  const [active, setActive] = useState(false)

  const handlePressPopup = () =>{
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
      <View style={styles.popupContainer}>
        <TouchableOpacity activeOpacity={1} onPress={handlePressPopup} style={styles.topText}>
          <Text style={styles.text(active)}>{topTitle}</Text>
        </TouchableOpacity>
        <View style={styles.breakingLine}></View>
        <TouchableOpacity activeOpacity={1} onPress={handlePressPopup} style={styles.bottomText}>
          <Text>{bottomTitle}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  popupContainer:{
    width: width*.4,
    height: width*.25,
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: width*.02,
    marginBottom: width*.02,
    marginRight: width*.009,
    marginLeft: width*.009,
    elevation: 3
  },
  topText:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: (active) =>({
    color: active? '#DB3022' : '#222222'
  }),
  breakingLine:{
    width: '100%',
    height: '.8%',
    backgroundColor: '#9B9B9B50',
  }
})
