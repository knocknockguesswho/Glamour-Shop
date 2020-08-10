import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


/*
submit? submit(function())
*/

export default Color = ({submit, color}) =>{

  const [active, setActive] = useState(false)

  const handleToggleButton = () =>{
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
      <TouchableOpacity activeOpacity={1} onPress={handleToggleButton} style={styles.buttonColor(color, active)}>
        <View style={styles.buttonColorActive(active)}></View>
      </TouchableOpacity>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  buttonColor: (color, active) =>({
    height: width*.09,
    width: width*.09,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: active? width*.009 : 0,
    borderColor: 'white'
  }),
  buttonColorActive: (active) =>({
    height: width*.09,
    width: width*.09,
    borderWidth: active? width*.002 : 0,
    borderColor: '#DB3022',
    borderRadius: 100
  })
})
