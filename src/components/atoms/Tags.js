import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { act } from 'react-test-renderer';

/*
title? 'BUTTON_TITLE'
type? 'primary', 'small'
submit? submit(function())
*/


export default Tags = ({title, type, submit, color}) =>{


  const [active, setActive] = useState(false);

  const handleTagButton = () =>{
    if(submit!==undefined){
      submit()
      setActive(!active)
    } else{
      console.log(`variable 'submit' expecting function`)
      setActive(!active)
    }
  };

  return(
    <>
      {type==='primary'?
        <TouchableOpacity activeOpacity={1} onPress={handleTagButton} style={styles.buttonPrimary(active)}>
          <Text style={styles.buttonPrimaryText(active)}>{title}</Text>
        </TouchableOpacity>:
        type==='small'?
        <TouchableOpacity activeOpacity={1} onPress={handleTagButton} style={styles.buttonSmall(active)}>
          <Text style={styles.buttonSmallText(active)}>{title}</Text>
        </TouchableOpacity>:
        <Text></Text>
      }
    </>
  )
};

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  buttonPrimary: (active) =>({
    height: width*.08,
    width: width*.2,
    borderWidth: active? 0 : width*.001,
    borderColor: '#22222280',
    backgroundColor: active? '#DB3022' : '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 10
  }),
  buttonSmall: (active) =>({
    height: width*.07,
    width: width*.2,
    backgroundColor: active? '#222' : 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 100,
  }),
  buttonPrimaryText: (active) => ({
    color: active? 'white' : '#222',
    fontWeight: '700',
    fontSize: 10,
    marginRight: width*.01,
  }),
  buttonSmallText: (active) =>({
    color: active? 'white' : '#222',
    fontWeight: '700',
    fontSize: 10,
    marginRight: width*.01
  })
})
