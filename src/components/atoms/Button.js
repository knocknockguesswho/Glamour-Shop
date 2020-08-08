import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

/*
title? 'BUTTON_TITLE'
type? 'primary', 'outline'
big? boolean
withIconLeft? boolean
*/

export default Button = ({title, type, big, withIconLeft}) =>{

  return(
    <>
      {type==='primary'?
        <TouchableOpacity activeOpacity={.8} style={styles.buttonPrimary(big, withIconLeft)}>
          {withIconLeft?
            <Icon 
              name='pen'
              size={10}
              color='white'
            />:
            <></>
          }
          <Text style={styles.buttonPrimaryText(big, withIconLeft)}>{title}</Text>
        </TouchableOpacity>:
        type==='outline'?
        <TouchableOpacity activeOpacity={.5} style={styles.buttonOutline(big)}>
          <Text style={styles.buttonOutlineText(big)}>{title}</Text>
        </TouchableOpacity>:
        
        <Text></Text>
      }
    </>
  )
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  buttonPrimary: (big, withIconLeft) =>({
    height: big? width*.11 : width*.07,
    width: big? width*.9 : width*.2,
    backgroundColor: '#DB3022',
    alignSelf: big? 'center' : 'auto',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: withIconLeft? 'row': 'column',
    borderRadius: 100
  }),
  buttonOutline: (big, withIconLeft)=>({
    height: big? width*.11 : width*.09,
    width: big? width*.9 : width*.4,
    borderWidth: 2,
    borderColor: 'black',
    alignSelf: big? 'center' : 'auto',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: withIconLeft? 'row': 'column',
    borderRadius: 100,
  }),
  buttonPrimaryText: (big, withIconLeft) =>({
    color: 'white',
    fontWeight: '700',
    fontSize: big? 15 : 8,
    marginRight: withIconLeft? width*.01:0
  }),
  buttonOutlineText: (big, withIconLeft) =>({
    color: 'black',
    fontWeight: '700',
    fontSize: big? 15 : 8,
    marginRight: withIconLeft? width*.01:0
  })
})
