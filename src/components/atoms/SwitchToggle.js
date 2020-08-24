import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import * as Animatable from 'react-native-animatable';

//persist whitelist
/*
submit? submit(function())
*/
export default SwitchToggle = ({toggleActive, togglePress}) =>{

  const [active, setActive] = useState(toggleActive)

  const handleToggle = () =>{
    if(togglePress!==undefined){
      togglePress()
      setActive(!active)
    } else{
      console.log(`variable 'submit' expecting function`)
      setActive(!active)
    }
  }

  return(
    <>
      <View style={styles.toggleContainer}>
        <TouchableOpacity activeOpacity={1} onPress={handleToggle}>
          <Animatable.View style={styles.toggleCircle(active)} />
        </TouchableOpacity>
      </View>
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  toggleContainer:{
    width: width*.1,
    backgroundColor: '#9B9B9B50',
    borderRadius: 100,
    justifyContent: 'center',
  },
  toggleCircle: (active) =>({
    width: width*.055,
    height: width*.055,
    backgroundColor: active? '#2AA952' : 'white',
    alignSelf: active? 'flex-end' : 'auto',
    borderRadius: 100,
    elevation: 1.25
  })
})
